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
        features: rows.map((row,id) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [+row.Lng, +row.Lat],
            },
            properties: {
                id,
                ...row
            }
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

        'https://emscycletours.site44.com/Good_Karma_Network_finder/gkn.csv'
        );
    console.log(data);
    const sites = toPins(d3.csvParse(data));


    map.U.addGeoJSON('sites', sites);
    console.log(sites);
    map.U.addCircle('sites-circles', 'sites', {
        circleColor: 'black',
        circleRadius: { stops: [[10, 3], [12, 5]] }
    });
    
    map.U.addSymbol('sites-pins', 'sites', {
        iconImage: 'marker',
        iconSize: { stops: [[9, 0.25], [11, 0.5]] },
        iconOffset:[0,-30],
        textField: { stops: [[12.5, ''], [13, '{Name}']] },
        textOffset:[0,1],
        textOptional: true,
        textSize: 14,
        textColor: 'hsl(331, 50%, 50%)',
    });
    window.Sites.sites = [...sites.features];
            
}
export default {
    data: () => ({
        selectedId: undefined
    }),
    async mounted() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145, -37.8],
            zoom: 12,
            style: 'mapbox://styles/mapbox/light-v9',
        });
        const geocoder = new MapboxGeocoder({ 
            mapboxgl, accessToken: mapboxgl.accessToken,
            countries: 'au',
            types: 'region,postcode,district,place,locality,neighborhood,address'
        });
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

        // map.addControl(geocoder);
        geocoder.on('result', ({result}) => {
            console.log(result); 
            window.Sites.home = result.geometry.coordinates
        }).on('clear', () => {
            window.Sites.home = null;
        });

        U.init(map);
        map.U.loadImage('marker', 'marker-outline2.png');
        map.U.loadImage('marker-highlight', 'marker-magenta.png');
        window.map = map;
        window.Map = this;
        map.U.hoverPointer('sites-pins');
        map.on('click', 'sites-pins', ({features: [site]}) => {
            // console.log(e);
            window.FeatureInfo.feature = site;
            this.highlight(site);
            window.App.sidebarOpen = true;
            document.getElementById('FeatureInfo').scrollIntoView()
        });
        map.U.onLoad(() => initMap(map));
        map.on('mousedown', () => {
            if (document.getElementById('map').clientWidth < 150) {
                window.App.sidebarOpen = false;
            }
        });
    }, methods: {
        highlight(site) {
            map.flyTo({ center: site.geometry.coordinates, zoom: 13 })
            window.FeatureInfo.feature = site;

            map.U.setIconImage('sites-pins', 
                ['case',
                    ['==', ['get', 'id'], site.properties.id], 
                    'marker-highlight',
                    'marker'
                ]
            );
            map.U.setIconSize('sites-pins', 
                ['case',
                    ['==', ['get', 'id'], site.properties.id], 
                    0.75,
                    0.5
                ]
            );
        }, zoomToBounds(bbox) {
            map.fitBounds(bbox);
        }
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

</script>

<style>
.mapboxgl-ctrl-geocoder {
    min-width: 200px !important;
}
</style>