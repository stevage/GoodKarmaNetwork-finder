(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)a=s[d],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},3771:function(e,t,n){"use strict";var r=n("6d54"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[n("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[n("div",{staticClass:"br b--light-gray overflow-auto w3 w5-ns pa2",attrs:{id:"sidebar"}},[n("p",[e._v("Enter your address to find your nearest group")]),n("div",{attrs:{id:"geocoder"}}),n("FeatureInfo"),n("Sites")],1),n("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[n("Map"),n("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)])])},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},s=[],c=n("75fc"),u=n("768b"),l=(n("96cf"),n("3b8d")),d=n("cebc"),p=n("e192"),f=n.n(p),m=n("885b"),h=n.n(m),v=n("8936"),g=n.n(v),w=n("bc3a"),b=n.n(w),y=(n("ac6d"),n("c307"),n("462d"));function _(e){return{type:"FeatureCollection",features:e.map(function(e,t){return{type:"Feature",geometry:{type:"Point",coordinates:[+e.Lng,+e.Lat]},properties:Object(d["a"])({id:t},e)}})}}function x(e){return k.apply(this,arguments)}function k(){return k=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(y),e.next=3,b.a.get("https://emscycletours.site44.com/Good_Karma_Network_finder/gkn.csv");case 3:n=e.sent,r=n.data,console.log(r),o=_(y.csvParse(r)),t.U.addGeoJSON("sites",o),console.log(o),t.U.addSymbol("sites-pins","sites",{iconImage:"marker",iconSize:.5,iconOffset:[0,-30],textField:"{Name}",textOffset:[0,1],textOptional:!0,textSize:14,textColor:"hsl(331, 50%, 50%)",textOpacity:{stops:[[12.5,0],[13,1]]}}),window.Sites.sites=Object(c["a"])(o.features);case 11:case"end":return e.stop()}},e,this)})),k.apply(this,arguments)}var O={data:function(){return{selectedId:void 0}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:f.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw",t=new f.a.Map({container:"map",center:[145,-37.8],zoom:12,style:"mapbox://styles/mapbox/light-v9"}),n=new h.a({mapboxgl:f.a,accessToken:f.a.accessToken}),document.getElementById("geocoder").appendChild(n.onAdd(t)),n.on("result",function(e){var t=e.result;console.log(t),window.Sites.home=t.geometry.coordinates}).on("clear",function(){window.Sites.home=null}),g.a.init(t),t.U.loadImage("marker","map-marker.png"),t.U.loadImage("marker-highlight","marker-magenta.png"),window.map=t,window.Map=this,t.U.hoverPointer("sites-pins"),t.on("click","sites-pins",function(e){var t=Object(u["a"])(e.features,1),n=t[0];window.FeatureInfo.feature=n,r.highlight(n)}),t.U.onLoad(function(){return x(t)});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{highlight:function(e){map.flyTo({center:e.geometry.coordinates,zoom:13}),window.FeatureInfo.feature=e,map.U.setIconImage("sites-pins",["case",["==",["get","id"],e.properties.id],"marker-highlight","marker"]),map.U.setIconSize("sites-pins",["case",["==",["get","id"],e.properties.id],.75,.5])},zoomToBounds:function(e){map.fitBounds(e)}}},I=O,S=n("2877"),j=Object(S["a"])(I,a,s,!1,null,"6cb27510",null);j.options.__file="Map.vue";var C=j.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.feature?n("div",{attrs:{id:"FeatureInfo"}},[n("h3",[e._v(e._s(e.p.Name)+" ")]),n("p",{staticClass:"text--gray"},[e._v(e._s(e.p["More Information"]))]),e.p.URL?n("p",{staticClass:"ml3"},[n("a",{staticClass:"no-underline",attrs:{href:e.p.URL,target:"_blank"}},[e._v("→ Learn more")])]):e._e()]):e._e()},M=[],U={name:"FeatureInfo",data:function(){return{feature:void 0}},computed:{p:function(){return this.feature.properties}},created:function(){window.FeatureInfo=this}},N=U,P=Object(S["a"])(N,F,M,!1,null,"fb1c56be",null);P.options.__file="FeatureInfo.vue";var T=P.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sites?n("div",{attrs:{id:"Sites"}},[e.home?n("div",{staticClass:"nearest"},[n("h3",[e._v("Nearest groups")]),e._l(e.nearestSites,function(t){return n("div",{staticClass:"site ma3 pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"name dib w-70 pa3"},[e._v(e._s(t.properties["Name"].replace(" Good Karma Network","")))]),n("div",{staticClass:"distance dib w-30 ph3 pv1"},[e._v(e._s(Math.round(t.distance))+" km")])])})],2):n("div",{staticClass:"all"},e._l(e.alphabetisedSites,function(t){return n("div",{staticClass:"site ma3 pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(n){e.click(t)}}},[n("div",{staticClass:"name dib w-70 pa1"},[e._v(e._s(t.properties["Name"].replace(" Good Karma Network","")))])])}),0)]):e._e()},E=[],R=n("5d73"),G=n.n(R),L=(n("55dd"),n("6e1d")),J=n.n(L),$=n("34db"),B=n.n($),K={name:"Sites",data:function(){return{sites:void 0,home:void 0}},created:function(){window.Sites=this},watch:{home:function(){var e=J()(this.home[1]),t=!0,n=!1,r=void 0;try{for(var o,i=G()(this.sites);!(t=(o=i.next()).done);t=!0){var a=o.value;console.log(e.distance(this.home,a.geometry.coordinates)),a.distance=e.distance(this.home,a.geometry.coordinates)}}catch(s){n=!0,r=s}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}this.sites.sort(function(e,t){return e.distance-t.distance}),window.Map.zoomToBounds(this.bbox)}},methods:{click:function(e){window.Map.highlight(e)},selected:function(e){return window.FeatureInfo.feature&&window.FeatureInfo.feature.properties.id===e.properties.id}},computed:{alphabetisedSites:function(){return this.sites.sort(function(e,t){return e.properties.Name>t.properties.Name?1:-1})},nearestSites:function(){return this.sites.slice(0,5)},bbox:function(){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:this.home}};return B.a.extent({type:"FeatureCollection",features:[e].concat(Object(c["a"])(this.nearestSites))})}}},A=K,Q=(n("3771"),Object(S["a"])(A,z,E,!1,null,"45638411",null));Q.options.__file="Sites.vue";var H=Q.exports;console.log(H);var W={name:"app",components:{Map:C,FeatureInfo:T,Sites:H}};n("948e");var Z=W,q=(n("034f"),Object(S["a"])(Z,o,i,!1,null,null,null));q.options.__file="App.vue";var D=q.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(D)}}).$mount("#app")},"64a9":function(e,t,n){},"6d54":function(e,t,n){}});
//# sourceMappingURL=app.7669b49a.js.map