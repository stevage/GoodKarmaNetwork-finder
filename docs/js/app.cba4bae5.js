(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)o=s[p],r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"1e16":function(e,t,n){},5490:function(e,t,n){"use strict";var i=n("bdf3"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column vh-100 sans-serif",attrs:{id:"app"}},[n("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[n("div",{class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[n("div",{staticClass:"container br bg-white b--light-gray overflow-auto pa2 bw2"},[n("FeatureInfo",{staticClass:"mb5"}),n("p",[e._v("Enter your suburb to find your nearest group")]),n("div",{attrs:{id:"geocoder"}}),n("Sites")],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),n("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[n("Map"),n("div",{staticClass:"absolute bg-white f3 br bt bb br--right br-100 b--magenta bw1 magenta pa1 pointer grow fw8",attrs:{id:"sidebarToggle"},on:{click:e.toggleSidebar}},[e.sidebarOpen?e._e():n("span",[e._v("→")]),e.sidebarOpen?n("span",[e._v("←")]):e._e()]),n("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)])])},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},s=[],c=n("75fc"),u=n("768b"),l=(n("96cf"),n("3b8d")),p=n("cebc"),d=n("e192"),f=n.n(d),m=n("885b"),h=n.n(m),v=n("8936"),b=n.n(v);n("ac6d"),n("c307");function w(e){return{type:"FeatureCollection",features:e.map(function(e,t){return{type:"Feature",geometry:{type:"Point",coordinates:[+e.Lng,+e.Lat]},properties:Object(p["a"])({id:t},e)}})}}var g={data:function(){return{selectedId:void 0}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:f.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw",t=new f.a.Map({container:"map",center:[145,-37.8],zoom:12,style:"mapbox://styles/mapbox/light-v9"}),t.addControl(new f.a.NavigationControl,"top-left"),n=new h.a({mapboxgl:f.a,accessToken:f.a.accessToken,countries:"au",types:"region,postcode,district,place,locality,neighborhood,address"}),document.getElementById("geocoder").appendChild(n.onAdd(t)),n.on("result",function(e){var t=e.result;console.log(t),window.Sites.home=t.geometry.coordinates}).on("clear",function(){window.Sites.home=null}),b.a.init(t,f.a),t.U.loadImage("marker","marker-outline2.png"),t.U.loadImage("marker-highlight","marker-magenta.png"),window.map=t,window.Map=this,t.U.onLoad(function(){return i.initMap(t)}),t.on("mousedown",function(){document.getElementById("map").clientWidth<150&&(window.App.sidebarOpen=!1)});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{highlight:function(e){map.flyTo({center:e.geometry.coordinates,zoom:13}),window.FeatureInfo.feature=e,map.U.setIconImage("sites-pins",["case",["==",["get","id"],e.properties.id],"marker-highlight","marker"]),map.U.setIconSize("sites-pins",["case",["==",["get","id"],e.properties.id],.75,.5])},zoomToBounds:function(e){map.fitBounds(e)},initMap:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var i,r,a,o=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=n("b2e9"),r="https://docs.google.com/spreadsheets/d/e/2PACX-1vSEXu2wQN2zDyNMc8YTu7YhjERf24r1A9a2CS2uuaEwgAWfkMT99pNaDrh0QuYcgi_aGdtJU0YNRaBF/pub?output=csv",e.t0=w,e.next=5,i.csv("https://cors-anywhere.herokuapp.com/"+r);case 5:e.t1=e.sent,a=(0,e.t0)(e.t1),t.U.addGeoJSON("sites",a),console.log(a),t.U.addCircle("sites-circles","sites",{circleColor:"black",circleRadius:{stops:[[10,3],[12,5]]}}),t.U.addSymbol("sites-pins","sites",{iconImage:"marker",iconSize:{stops:[[9,.25],[11,.5]]},iconOffset:[0,-30],textField:{stops:[[12.5,""],[13,"{Name}"]]},textOffset:[0,1],textOptional:!0,textSize:14,textColor:"hsl(331, 50%, 50%)"}),t.U.hoverPopup(["sites-circles","sites-pins"],function(e){return e.properties.Name}),t.U.hoverPointer("sites-pins"),t.on("click","sites-pins",function(e){var t=Object(u["a"])(e.features,1),n=t[0];window.FeatureInfo.feature=n,o.highlight(n),window.App.sidebarOpen=!0,document.getElementById("FeatureInfo").scrollIntoView()}),window.Sites.sites=Object(c["a"])(a.features);case 15:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},y=g,_=(n("5490"),n("2877")),O=Object(_["a"])(y,o,s,!1,null,null,null);O.options.__file="Map.vue";var x=O.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.feature?n("div",{staticClass:"ph2 pb3",attrs:{id:"FeatureInfo"}},[n("h3",[e._v(e._s(e.p.Name)+" ")]),n("p",{staticClass:"text--gray"},[e._v(e._s(e.p["More Information"]))]),e.p.URL?n("div",{staticClass:"info p tc mt4 grow"},[n("a",{staticClass:"br-pill pa2 ph3 no-underline",attrs:{href:e.p.URL,target:"_blank"}},[e._v("Learn more")])]):e._e(),n("div",{staticClass:"view-on-map dn-ns tc mt4 pointer grow",on:{click:e.viewOnMap}},[n("span",{staticClass:"br-pill pa2"},[e._v("View on map")])])]):e._e()},C=[],S={name:"FeatureInfo",data:function(){return{feature:void 0}},computed:{p:function(){return this.feature.properties}},created:function(){window.FeatureInfo=this},methods:{viewOnMap:function(){window.App.sidebarOpen=!1}}},I=S,j=(n("70fc"),Object(_["a"])(I,k,C,!1,null,"377ca9d5",null));j.options.__file="FeatureInfo.vue";var M=j.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sites?n("div",{staticClass:"mt2",attrs:{id:"Sites"}},[e.home?n("div",{staticClass:"nearest"},[n("h3",[e._v("Nearest groups")]),e._l(e.nearestSites,function(t){return n("div",{staticClass:"site pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"name dib w-70 pa1"},[e._v(e._s(t.properties["Name"].replace(/ Good Karma Network/i,"")))]),n("div",{staticClass:"distance dib w-30 ph1 pv1"},[e._v(e._s(Math.round(t.distance))+" km")])])})],2):n("div",{staticClass:"all"},[n("h3",[e._v("All groups")]),e._l(e.alphabetisedSites,function(t){return n("div",{staticClass:"site pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"name dib w-70 pa1"},[e._v(e._s(t.properties["Name"].replace(/ Good Karma Network/i,"")))])])})],2)]):e._e()},N=[],U=n("5d73"),T=n.n(U),E=(n("55dd"),n("6e1d")),P=n.n(E),R=n("34db"),z=n.n(R),A={name:"Sites",data:function(){return{sites:void 0,home:void 0}},created:function(){window.Sites=this},watch:{home:function(){var e=P()(this.home[1]),t=!0,n=!1,i=void 0;try{for(var r,a=T()(this.sites);!(t=(r=a.next()).done);t=!0){var o=r.value;o.distance=e.distance(this.home,o.geometry.coordinates)}}catch(s){n=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(n)throw i}}this.sites.sort(function(e,t){return e.distance-t.distance}),window.Map.zoomToBounds(this.bbox)}},methods:{click:function(e){window.Map.highlight(e)},selected:function(e){return window.FeatureInfo.feature&&window.FeatureInfo.feature.properties.id===e.properties.id}},computed:{alphabetisedSites:function(){return this.sites.slice().sort(function(e,t){return e.properties.Name>t.properties.Name?1:-1})},nearestSites:function(){return this.sites.slice(0,5)},bbox:function(){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:this.home}};return z.a.extent({type:"FeatureCollection",features:[e].concat(Object(c["a"])(this.nearestSites))})}}},B=A,G=(n("76ab"),Object(_["a"])(B,F,N,!1,null,"a68b4e58",null));G.options.__file="Sites.vue";var J=G.exports;console.log(J);var L={name:"app",created:function(){window.App=this},data:function(){return{sidebarOpen:!0}},components:{Map:x,FeatureInfo:M,Sites:J},watch:{sidebarOpen:function(){this.$nextTick(function(){return window.map.resize()})}},methods:{toggleSidebar:function(){this.sidebarOpen=!this.sidebarOpen}}};n("948e");var $=L,Q=(n("034f"),Object(_["a"])($,r,a,!1,null,null,null));Q.options.__file="App.vue";var Y=Q.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(Y)}}).$mount("#app")},"64a9":function(e,t,n){},"70fc":function(e,t,n){"use strict";var i=n("1e16"),r=n.n(i);r.a},"76ab":function(e,t,n){"use strict";var i=n("b80c"),r=n.n(i);r.a},b80c:function(e,t,n){},bdf3:function(e,t,n){}});
//# sourceMappingURL=app.cba4bae5.js.map