(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)o=s[d],r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"1e16":function(e,t,n){},5490:function(e,t,n){"use strict";var i=n("bdf3"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column vh-100 sans-serif",attrs:{id:"app"}},[n("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[n("div",{staticClass:"br bg-white b--light-gray overflow-auto pa2 bw2",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[n("FeatureInfo",{staticClass:"mb5"}),n("p",[e._v("Enter your suburb to find your nearest group")]),n("div",{attrs:{id:"geocoder"}}),n("Sites")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),n("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[n("Map"),n("div",{staticClass:"absolute bg-white f3 br bt bb br--right br-100 b--magenta bw1 magenta pa1 pointer grow fw8",attrs:{id:"sidebarToggle"},on:{click:e.toggleSidebar}},[e.sidebarOpen?e._e():n("span",[e._v("→")]),e.sidebarOpen?n("span",[e._v("←")]):e._e()]),n("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)])])},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},s=[],c=n("75fc"),u=n("768b"),l=(n("96cf"),n("3b8d")),d=n("cebc"),p=n("e192"),f=n.n(p),m=n("885b"),h=n.n(m),v=n("8936"),b=n.n(v),w=n("bc3a"),g=n.n(w),y=(n("ac6d"),n("c307"),n("462d"));function _(e){return{type:"FeatureCollection",features:e.map(function(e,t){return{type:"Feature",geometry:{type:"Point",coordinates:[+e.Lng,+e.Lat]},properties:Object(d["a"])({id:t},e)}})}}function O(e){return x.apply(this,arguments)}function x(){return x=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(y),e.next=3,g.a.get("https://emscycletours.site44.com/Good_Karma_Network_finder/gkn.csv");case 3:n=e.sent,i=n.data,console.log(i),r=_(y.csvParse(i)),t.U.addGeoJSON("sites",r),console.log(r),t.U.addCircle("sites-circles","sites",{circleColor:"black",circleRadius:{stops:[[10,3],[12,5]]}}),t.U.addSymbol("sites-pins","sites",{iconImage:"marker",iconSize:{stops:[[9,.25],[11,.5]]},iconOffset:[0,-30],textField:{stops:[[12.5,""],[13,"{Name}"]]},textOffset:[0,1],textOptional:!0,textSize:14,textColor:"hsl(331, 50%, 50%)"}),window.Sites.sites=Object(c["a"])(r.features);case 12:case"end":return e.stop()}},e,this)})),x.apply(this,arguments)}var k={data:function(){return{selectedId:void 0}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:f.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw",t=new f.a.Map({container:"map",center:[145,-37.8],zoom:12,style:"mapbox://styles/mapbox/light-v9"}),n=new h.a({mapboxgl:f.a,accessToken:f.a.accessToken,countries:"au",types:"region,postcode,district,place,locality,neighborhood,address"}),document.getElementById("geocoder").appendChild(n.onAdd(t)),n.on("result",function(e){var t=e.result;console.log(t),window.Sites.home=t.geometry.coordinates}).on("clear",function(){window.Sites.home=null}),b.a.init(t),t.U.loadImage("marker","marker-outline2.png"),t.U.loadImage("marker-highlight","marker-magenta.png"),window.map=t,window.Map=this,t.U.hoverPointer("sites-pins"),t.on("click","sites-pins",function(e){var t=Object(u["a"])(e.features,1),n=t[0];window.FeatureInfo.feature=n,i.highlight(n),window.App.sidebarOpen=!0,document.getElementById("FeatureInfo").scrollIntoView()}),t.U.onLoad(function(){return O(t)}),t.on("mousedown",function(){document.getElementById("map").clientWidth<150&&(window.App.sidebarOpen=!1)});case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{highlight:function(e){map.flyTo({center:e.geometry.coordinates,zoom:13}),window.FeatureInfo.feature=e,map.U.setIconImage("sites-pins",["case",["==",["get","id"],e.properties.id],"marker-highlight","marker"]),map.U.setIconSize("sites-pins",["case",["==",["get","id"],e.properties.id],.75,.5])},zoomToBounds:function(e){map.fitBounds(e)}}},C=k,I=(n("5490"),n("2877")),S=Object(I["a"])(C,o,s,!1,null,null,null);S.options.__file="Map.vue";var j=S.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.feature?n("div",{staticClass:"ph2 pb3",attrs:{id:"FeatureInfo"}},[n("h3",[e._v(e._s(e.p.Name)+" ")]),n("p",{staticClass:"text--gray"},[e._v(e._s(e.p["More Information"]))]),e.p.URL?n("div",{staticClass:"info p tc mt4 grow"},[n("a",{staticClass:"br-pill pa2 ph3 no-underline",attrs:{href:e.p.URL,target:"_blank"}},[e._v("Learn more")])]):e._e(),n("div",{staticClass:"view-on-map dn-ns tc mt4 pointer grow",on:{click:e.viewOnMap}},[n("span",{staticClass:"br-pill pa2"},[e._v("View on map")])])]):e._e()},M=[],U={name:"FeatureInfo",data:function(){return{feature:void 0}},computed:{p:function(){return this.feature.properties}},created:function(){window.FeatureInfo=this},methods:{viewOnMap:function(){window.App.sidebarOpen=!1}}},N=U,T=(n("70fc"),Object(I["a"])(N,F,M,!1,null,"377ca9d5",null));T.options.__file="FeatureInfo.vue";var E=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sites?n("div",{staticClass:"mt2",attrs:{id:"Sites"}},[e.home?n("div",{staticClass:"nearest"},[n("h3",[e._v("Nearest groups")]),e._l(e.nearestSites,function(t){return n("div",{staticClass:"site pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"name dib w-70 pa1"},[e._v(e._s(t.properties["Name"].replace(/ Good Karma Network/i,"")))]),n("div",{staticClass:"distance dib w-30 ph1 pv1"},[e._v(e._s(Math.round(t.distance))+" km")])])})],2):n("div",{staticClass:"all"},[n("h3",[e._v("All groups")]),e._l(e.alphabetisedSites,function(t){return n("div",{staticClass:"site pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"name dib w-70 pa1"},[e._v(e._s(t.properties["Name"].replace(/ Good Karma Network/i,"")))])])})],2)]):e._e()},z=[],R=n("5d73"),A=n.n(R),G=(n("55dd"),n("6e1d")),B=n.n(G),L=n("34db"),$=n.n(L),J={name:"Sites",data:function(){return{sites:void 0,home:void 0}},created:function(){window.Sites=this},watch:{home:function(){var e=B()(this.home[1]),t=!0,n=!1,i=void 0;try{for(var r,a=A()(this.sites);!(t=(r=a.next()).done);t=!0){var o=r.value;console.log(e.distance(this.home,o.geometry.coordinates)),o.distance=e.distance(this.home,o.geometry.coordinates)}}catch(s){n=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(n)throw i}}this.sites.sort(function(e,t){return e.distance-t.distance}),window.Map.zoomToBounds(this.bbox)}},methods:{click:function(e){window.Map.highlight(e)},selected:function(e){return window.FeatureInfo.feature&&window.FeatureInfo.feature.properties.id===e.properties.id}},computed:{alphabetisedSites:function(){return this.sites.sort(function(e,t){return e.properties.Name>t.properties.Name?1:-1})},nearestSites:function(){return this.sites.slice(0,5)},bbox:function(){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:this.home}};return $.a.extent({type:"FeatureCollection",features:[e].concat(Object(c["a"])(this.nearestSites))})}}},K=J,Q=(n("a2d5"),Object(I["a"])(K,P,z,!1,null,"2aead958",null));Q.options.__file="Sites.vue";var V=Q.exports;console.log(V);var W={name:"app",created:function(){window.App=this},data:function(){return{sidebarOpen:!0}},components:{Map:j,FeatureInfo:E,Sites:V},watch:{sidebarOpen:function(){this.$nextTick(function(){return window.map.resize()})}},methods:{toggleSidebar:function(){this.sidebarOpen=!this.sidebarOpen}}};n("948e");var H=W,Z=(n("034f"),Object(I["a"])(H,r,a,!1,null,null,null));Z.options.__file="App.vue";var q=Z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(q)}}).$mount("#app")},"64a9":function(e,t,n){},"6f18":function(e,t,n){},"70fc":function(e,t,n){"use strict";var i=n("1e16"),r=n.n(i);r.a},a2d5:function(e,t,n){"use strict";var i=n("6f18"),r=n.n(i);r.a},bdf3:function(e,t,n){}});
//# sourceMappingURL=app.a6137b3f.js.map