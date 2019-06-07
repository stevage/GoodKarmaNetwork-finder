<template lang="pug">
#FeatureInfo(v-if="feature")
    h3 {{ p.Name }} 
    p.text--gray {{ p['More Information'] }}
    .info.p.tc.mt4(v-if="p.URL").grow
        a.br-pill.pa2.ph3(:href="p.URL" target="_blank").no-underline Learn more
    .view-on-map.dn-ns.tc.mt4.pointer.grow(@click="viewOnMap")
        span.br-pill.pa2 View on map
    //- table(v-if="feature").bg-white.b--gray.ba.helvetica.ma1
    //-     tr
    //-         th Link
    //-         td
    //-             a(:href="p.URL") Link
    //-     tr(v-for="(prop,value) in feature.properties")
    //-         td {{ value }}
    //-         th {{ prop }}
</template>

<script>
export default {
    name: "FeatureInfo",
    data: () => ({
        feature: undefined
    }), computed: {
        p() {
            return this.feature.properties;
        }
    },
    created() {
        window.FeatureInfo = this;
    }, methods: {
        viewOnMap() {
            window.App.sidebarOpen = false;
        }
    }
}
</script>

<style scoped>

.info a {
    /* background: hsl(210, 5%, 24%);
    color: hsl(325, 97%, 46%); */
    background: hsl(333, 97%, 46%);
    color: white;
}

.view-on-map span {
    border: 1px solid hsl(333, 97%, 46%);
    color: hsl(325, 97%, 46%);
}
</style>