<template lang="pug">
    #app.flex.flex-column.vh-100.sans-serif
        //- #top.bb.b--gray.bg-washed-yellow.h3
        //-     h1 Title
        #middle.flex.flex-auto
            #sidebar(:class="{ collapsed: !sidebarOpen}")
                .container.br.bg-white.b--light-gray.overflow-auto.pa2.bw2
                    FeatureInfo.mb5
                    p Enter your suburb to find your nearest group
                    #geocoder
                    Sites
            #sidebar-rim.relative.br.b--gray.bw2(v-show="!sidebarOpen"  style="width:20px" @click="sidebarOpen = true")
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

#sidebar.collapsed {
  position: absolute;
  animation-duration: 0.5s;
  animation-name: slideout;
  pointer-events:none;
  animation-fill-mode: forwards;
}

#sidebar {
  animation-duration: 0.5s;
  animation-name: slidein;
  z-index:1;
  width:230px;
}

@keyframes slidein {
  from {
     transform: translate(-230px,0);
  }
  to {
     transform: translate(0px,0);
     /* opacity:1; */
  }
}
@keyframes slideout {
  from {
      transform: translate(0px,0);
  }
  99% {
      opacity: 1; 
  }
  to {
      transform: translate(-230px,0);
      opacity: 0; /* The sidebar will still be present, so we need to hide it. Relies on animation-fill-mode: forwards*/
  }
}

/* Exists to ensure whole sidebar animates together */
.container {
  height:100vh;
}

</style>
