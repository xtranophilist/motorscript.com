(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{170:function(t,e,n){"use strict";var o={props:["title","published","updated","archived"],head:function(){return{title:this.title}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title",attrs:{itemprop:"name headline"}},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"time"},[t._v("Published: "),n("time",{attrs:{itemprop:"datePublished"}},[t._v(t._s(t.published))])]),t._v(" "),t.updated?n("div",{staticClass:"time"},[t._v("Updated: "),n("time",{attrs:{itemprop:"dateModified"}},[t._v(t._s(t.updated))])]):t._e(),t._v(" "),t.archived?n("div",{staticClass:"block"},[t._v("Note: This is an archived post. Information may not be relevant now.")]):t._e()])}),[],!1,null,null,null);e.a=component.exports},211:function(t,e,n){"use strict";n.r(e);var o=n(170),l={mixins:[o.a],components:{BlogTitle:o.a}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("BlogTitle",{attrs:{title:"Lazy Loading Google Maps",published:"04 May 2018"}}),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{itemprop:"articleBody"}},[t._v("\n\n            I created a really lean page and then I had to embed Google Maps which made multiple requests and made the page slower.\n            Not all users reach to the viewport with the map and very few of the ones who reach there use it interactively.\n            So, this is how I implemented lazy-loading of the maps.\n\n            "),t._m(0),t._v("\n\n            Following is a sample implementation in Vue.js. Lazy-loading of image is done via "),n("a",{attrs:{href:"https://github.com/verlok/lazyload",target:"_blank",rel:"noreferrer noopener"}},[t._v("LazyLoad")]),t._v("\n            which reads the "),n("span",{staticClass:"hl"},[t._v("data-src")]),t._v(" attribute and writes "),n("span",{staticClass:"hl"},[t._v("src")]),t._v(" attribute lazily.\n\n            "),t._m(1),t._v("\n\n            Example usage of the component:\n            "),t._m(2)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("Do not load anything if the user isn't going to view it.")]),t._v(" "),n("li",[t._v("Show users a static map (image) if they reach the viewport.")]),t._v(" "),n("li",[t._v("Load a dynamic map only if they want to interact (i.e. click on the static map).")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-html"},[n("code",[t._v('<template>\n    <div>\n        <div v-if="isStatic" class="has-text-centered" id="static-map-wrapper">\n            <img :data-src="staticUrl" alt="Map" title="Click to browse" @click="loadDynamic"/>\n        </div>\n        <div v-else class="g-map" id="g-map"></div>\n    </div>\n</template>\n\n<script>\n\n  export default {\n    props: {\n      \'lat\': {}, \'lng\': {}, \'zoom\': {default: 14}\n    },\n    data() {\n      return {\n        isStatic: true,\n        staticWidth: 640,\n        staticHeight: 400,\n        key: config.googleMapKey,\n      }\n    },\n    computed: {\n      staticUrl() {\n        return `https://maps.googleapis.com/maps/api/staticmap?center=${this.lat},${this.lng}&zoom=${this.zoom}&maptype=roadmap\n&markers=${this.lat},${this.lng}&key=${this.key}&size=${this.staticWidth}x${this.staticHeight}`;\n      }\n    },\n    mounted() {\n      window.initMap = () => {\n        const el = document.getElementById(\'g-map\');\n        const latLng = new google.maps.LatLng(this.lat, this.lng);\n        const options = {\n          zoom: this.zoom,\n          center: latLng\n        };\n        const map = new google.maps.Map(el, options);\n        const marker = new google.maps.Marker({\n          position: latLng,\n        });\n        marker.setMap(map);\n      };\n\n    },\n    methods: {\n      loadDynamic() {\n        this.isStatic = false;\n        if (window.google && google.maps) {\n          window.initMap();\n        } else {\n          ClientUtils.loadScript(`https://maps.googleapis.com/maps/api/js?key=${this.key}&v=3&callback=initMap`);\n        }\n      }\n    }\n  };\n<\/script>\n\n<style scoped>\n.g-map {\n    height: 400px;\n    margin: 0 auto;\n    background: #ebe8de;\n}\n</style>')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-html"},[n("code",[t._v('<GMap lat="27.6861537" lng="85.3295763"/>\n')])])}],!1,null,null,null);e.default=component.exports}}]);