<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import U from 'mapbox-gl-utils';

function toPins(rows) {
    return {
        type: 'FeatureCollection',
        features: rows.map((row, id) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [+row.Lng, +row.Lat],
            },
            properties: {
                id,
                ...row,
            },
        })),
    };
}
export default {
    data: () => ({
        selectedId: undefined,
    }),
    async mounted() {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjbWpyeWVwOGI0ajU2M2hwczVrdTExYmRqIn0.0EucCvUlczA1q4JGJvV2NA';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145, -37.8],
            zoom: 12,
            style: 'mapbox://styles/mapbox/light-v9',
        });
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');
        const geocoder = new MapboxGeocoder({
            mapboxgl,
            accessToken: mapboxgl.accessToken,
            countries: 'au',
            types: 'region,postcode,district,place,locality,neighborhood,address',
        });
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

        // map.addControl(geocoder);
        geocoder
            .on('result', ({ result }) => {
                console.log(result);
                window.Sites.home = result.geometry.coordinates;
            })
            .on('clear', () => {
                window.Sites.home = null;
            });

        U.init(map, mapboxgl);
        // map.addSource('sites', {
        //     type: 'geojson',
        //     data: sites,
        // });
        // map.addLayer({
        //     id: 'site-pins',
        //     type: 'symbol',
        //     source: 'sites',
        //     layout: {
        //         'icon-image': 'pin',
        //     },
        // });
        const urlBase = window.location + '';
        map.U.loadImage('marker', `${urlBase}marker-outline2.png`);
        map.U.loadImage('marker-highlight', `${urlBase}marker-magenta.png`);
        window.map = map;
        // window.Map = this;
        map.U.onLoad(() => this.initMap(map));
        map.on('mousedown', () => {
            if (document.getElementById('map').clientWidth < 150) {
                window.App.sidebarOpen = false;
            }
        });
    },
    methods: {
        highlight(site) {
            map.flyTo({ center: site.geometry.coordinates, zoom: 13 });
            window.FeatureInfo.feature = site;

            map.U.setIconImage('sites-pins', [
                'case',
                ['==', ['get', 'id'], site.properties.id],
                'marker-highlight',
                'marker',
            ]);
            map.U.setIconSize('sites-pins', [
                'case',
                ['==', ['get', 'id'], site.properties.id],
                0.75,
                0.5,
            ]);
        },
        zoomToBounds(bbox) {
            map.fitBounds(bbox);
        },
        async initMap(map) {
            const d3 = require('d3-fetch');
            const csvUrl =
                'https://docs.google.com/spreadsheets/d/e/2PACX-1vSEXu2wQN2zDyNMc8YTu7YhjERf24r1A9a2CS2uuaEwgAWfkMT99pNaDrh0QuYcgi_aGdtJU0YNRaBF/pub?output=csv';
            const sites = toPins(await d3.csv(csvUrl));
            map.U.addGeoJSON('sites', sites);
            console.log(sites);
            map.U.addCircle('sites-circles', 'sites', {
                circleColor: 'black',
                circleRadius: {
                    stops: [
                        [10, 3],
                        [12, 5],
                    ],
                },
            });

            map.U.addSymbol('sites-pins', 'sites', {
                iconImage: 'marker',
                iconSize: {
                    stops: [
                        [9, 0.25],
                        [11, 0.5],
                    ],
                },
                iconOffset: [0, -30],
                textField: {
                    stops: [
                        [12.5, ''],
                        [13, '{Name}'],
                    ],
                },
                textOffset: [0, 1],
                textOptional: true,
                textSize: 14,
                textColor: 'hsl(331, 50%, 50%)',
            });
            map.U.hoverPopup(
                ['sites-circles', 'sites-pins'],
                (f) => f.properties.Name
            );
            map.U.hoverPointer('sites-pins');
            map.on('click', 'sites-pins', ({ features: [site] }) => {
                // console.log(e);
                window.FeatureInfo.feature = site;
                this.highlight(site);
                window.App.sidebarOpen = true;
                document.getElementById('FeatureInfo').scrollIntoView();
            });

            window.Sites.sites = [...sites.features];
        },
    },
};
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
</script>

<style>
.mapboxgl-ctrl-geocoder {
    min-width: 200px !important;
}
</style>
