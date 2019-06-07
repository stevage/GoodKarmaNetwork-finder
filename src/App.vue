<template lang="pug">
    #app.flex.flex-column.vh-100.sans-serif
        //- #top.bb.b--gray.bg-washed-yellow.h3
        //-     h1 Title
        #middle.flex.flex-auto
            #sidebar.br.bg-white.b--light-gray.overflow-auto.w3.w5-ns.pa2.w5.bw2(v-if="sidebarOpen")
                FeatureInfo.mb5
                p Enter your address to find your nearest group
                #geocoder
                Sites
            #sidebar-rim.relative.br.b--gray.bw2(v-if="!sidebarOpen"  style="width:7px")
            #map-container.relative.flex-auto
                Map
                #sidebarToggle.absolute.bg-white.f3.br.bt.bb.br--right.br-100.b--magenta.bw1.magenta.pa1.pointer.grow.fw8(@click="toggleSidebar")
                  span(v-if="!sidebarOpen") &rarr;
                  span(v-if="sidebarOpen") &larr;
                #overlay.absolute
        //- #bottom.bt.b--light-gray.flex-none.h2
</template>

<script>
import Map from './components/Map.vue';
import FeatureInfo from './components/FeatureInfo.vue';
import Sites from './components/Sites.vue';
console.log(Sites);

export default {
    name: 'app',
    created() {
      window.App = this;
    },
    data: () => ({
      sidebarOpen: true
    }),
    components: {
      Map,
      FeatureInfo,
      Sites
    }, watch: {
      sidebarOpen() {
        this.$nextTick(() => window.map.resize())
      }
    }, methods: {
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
      }
    }
}

require('tachyons/css/tachyons.min.css');
</script>

<style>
html, body {
  height: 100vh;
  width: 100%;
  margin:0;
  padding:0;
}

h3 {
  color: hsl(210, 5%, 24%);
}

.b--magenta {
  border-color: hsl(333, 97%, 46%);
}

.magenta {
  color: hsl(333, 97%, 46%);
}

#sidebarToggle:hover {
  background:hsl(333,100%,95%)
}

.collapsed {
  position: absolute;
  /* transform:translate(-230px, 0); */
  /* z-index:1; */

}
</style>
