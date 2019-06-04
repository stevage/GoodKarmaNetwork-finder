<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import U from 'mapbox-gl-utils';
// const d3 = require('d3-fetch');
const d3 = require('d3-dsv');
import axios from 'axios';

function toPins(rows) {
    return {
        type: 'FeatureCollection',
        features: rows.map(row => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [+row.Lng, +row.Lat],
            },
            properties: row
        }))
    }
}
async function initMap(map) {
    console.log(d3);
    const { data } = await axios.get(
        // 'https://www.dropbox.com/s/2qki2wp865vuj6f/clinics.csv?dl=1'
        //'https://dropbox.com/s/dl/2qki2wp865vuj6f/clinics.csv'
        // 'https://www.dropbox.com/s/dl/2qki2wp865vuj6f/cl'
        // 'https://uc8642c1e411e81db8d6d60021a2.dl.dropboxusercontent.com/cd/0/get/Ah4oWwTNLRQNJZT7nfmcocRGK00szXkDam3DOK0hCpwAncU5liAUhOg9BObbey6zSBPscuE5-gwuc-hEWVjAh9ZnTyy0-IQlePTfFqR_KSe-oQ/file?dl=1#'

        'http://emscycletours.site44.com/Good_Karma_Network_finder/gkn.csv'
        );
    console.log(data);
    const sites = toPins(d3.csvParse(data));


    map.U.addGeoJSON('sites', sites);
    console.log(sites);
    // map.U.addCircle('sites-pins', 'sites', {
    //     circleColor: 'purple'
    // });
    map.U.addSymbol('sites-pins', 'sites', {
        iconImage: 'marker',
        iconSize: 0.5,
        iconOffset:[0,-30]
    });
    window.Sites.sites = [...sites.features];
            
}
export default {
    async mounted() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145, -37.8],
            zoom: 12,
            style: 'mapbox://styles/mapbox/light-v9',
        });
        const geocoder = new MapboxGeocoder({ mapboxgl, accessToken: mapboxgl.accessToken});
        map.addControl(geocoder);
        geocoder.on('result', ({result}) => {
            console.log(result); 
            window.Sites.home = result.geometry.coordinates
        });

        U.init(map);
        map.U.loadImage('marker', '/map-marker.png');
        window.map = map;
        window.Map = this;
        map.U.hoverPointer('sites-pins');
        map.on('click', 'sites-pins', e => {
            console.log(e);
            window.FeatureInfo.feature = e.features[0];
        });
        map.U.onLoad(() => initMap(map));
    }, methods: {
        highlight(site) {
            map.flyTo({ center: site.geometry.coordinates, zoom: 13 })
            window.FeatureInfo.feature = site;
        }
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

</script>

<style scoped>
</style>