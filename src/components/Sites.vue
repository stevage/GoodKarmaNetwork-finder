<template lang="pug">
#Sites(v-if="sites && home")
    h3 Nearest groups

    .site.ma3.pointer.glow.o-70(v-for="site in nearestSites" @click="click(site)")
        .name.dib.w-70 {{ site.properties['Name'] }}
        .distance.dib.w-30.pl3 {{ Math.round(site.distance) }} km
</template>

<script>
import cheapRuler from 'cheap-ruler';
import geojsonBounds from 'geojson-bounds';
export default {
    name: "Sites",
    data: () => ({
        sites: undefined,
        home: undefined
    }),
    created() {
        window.Sites = this;
    }, watch: {
        home() {
            const ruler = cheapRuler(this.home[1]);
            for (const site of this.sites) {
                console.log(ruler.distance(this.home, site.geometry.coordinates));
                site.distance = ruler.distance(this.home, site.geometry.coordinates)
            }
            this.sites.sort((a, b) => a.distance - b.distance);
            window.Map.zoomToBounds(this.bbox);

        }
    }, methods: {
        click(site) {
            window.Map.highlight(site);
        }
    }, computed: {
        nearestSites() {
            return this.sites.slice(0,5);
        }, bbox() {
            const homePoint = { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: this.home }};
            return geojsonBounds.extent({ type: 'FeatureCollection', features: [homePoint, ...this.nearestSites] });
        }
    }
}
</script>

<style scoped>
.site:hover {
    font-weight: bold;
}
</style>