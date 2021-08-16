(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{170:function(e,t,n){"use strict";var o={props:["title","published","updated","archived"],head:function(){return{title:this.title}}},r=n(8),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title",attrs:{itemprop:"name headline"}},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"time"},[e._v("Published: "),n("time",{attrs:{itemprop:"datePublished"}},[e._v(e._s(e.published))])]),e._v(" "),e.updated?n("div",{staticClass:"time"},[e._v("Updated: "),n("time",{attrs:{itemprop:"dateModified"}},[e._v(e._s(e.updated))])]):e._e(),e._v(" "),e.archived?n("div",{staticClass:"block"},[e._v("Note: This is an archived post. Information may not be relevant now.")]):e._e()])}),[],!1,null,null,null);t.a=component.exports},225:function(e,t,n){"use strict";n.r(t);var o=n(170),r={mixins:[o.a],components:{BlogTitle:o.a}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("BlogTitle",{attrs:{title:"Using CKEditor 5 with Nuxt.js",published:"25 Jan 2019"}}),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{itemprop:"articleBody"}},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),n("h2",[e._v("Method 1: Using Plugins")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("h2",[e._v("Method 2: Importing in pages only for Client Side")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v("\n\nHappy Nuxting!\n\n    ")])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        CKEditor 5 is built for browsers and although ES6 imports are available\n        it cannot be used directly in Nuxt.js with Server Side Rendering (SSR)\n        because the sources reference to "),n("i",{staticClass:"hl"},[e._v("window")]),e._v(" object.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Importing CKEditor in components with Nuxt running in universal mode would give the following error:\n        "),n("pre",{staticClass:"language-js"},[n("code",[e._v("ERROR  window is not defined\n  at Object.<anonymous> (node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js:5:2287)")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        In this example, we will be using Document editor build of CKEditor - DecoupledEditor. Other builds should also work in the same manner.\n\n        "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("yarn add @ckeditor/ckeditor5-build-decoupled-document")])]),e._v("\n\n        View "),n("a",{attrs:{href:"https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#document-editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("CKEditor documentation")]),e._v(" for more details.\n\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Create "),n("i",{staticClass:"hl"},[e._v("plugins/ckeditor.js")]),e._v(" with the following content:\n        "),n("pre",{staticClass:"language-javascript"},[n("code",[e._v("import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'\nexport default DecoupledEditor")])]),e._v("\n\n    In "),n("span",{staticClass:"hl"},[e._v("nuxt.config.js")]),e._v(", add the newly created plugin only to be used for Client Side Rendering (CSR):\n"),n("pre",{staticClass:"language-js"},[n("code",[e._v("plugins: [\n  ...,\n  { src: '~plugins/ckeditor', ssr: false }\n],")])]),e._v("\n\nNow "),n("i",{staticClass:"hl"},[e._v("DecoupledEditor")]),e._v(" can be used within Nuxt pages.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("WARNING: This method causes Nuxt to include CKEditor in vendor build\n        which will be loaded to render pages even when CKEditor is not required. Therefore, I prefer Method 2.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Nuxt facilitates "),n("i",{staticClass:"hl"},[e._v("process.browser")]),e._v(" which we can use to test if the script is being run on the browser.\n      However, this cannot be used with ES6 imports as we cannot wrap "),n("i",{staticClass:"hl"},[e._v("import")]),e._v(" within an "),n("i",{staticClass:"hl"},[e._v("if")]),e._v(" condition.\n      We will have to resort to using "),n("i",{staticClass:"hl"},[e._v("require")]),e._v(".\n      This way we will import ckeditor only in the required pages, thus keeping our overall application light. A minimal page using this technique follows.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-html"},[e._v("<template>\n  <div class=\"container\">\n    <h1>CKEditor 5 Nuxt Demo</h1>\n    <div id=\"toolbar-container\"></div>\n    <div id=\"editor\"></div>\n  </div>\n</template>\n\n<script>\nlet DecoupledEditor\nif (process.browser) {\n  DecoupledEditor = require('@ckeditor/ckeditor5-build-decoupled-document')\n}\n\nexport default {\n  mounted() {\n    DecoupledEditor.create(document.querySelector('#editor'))\n      .then((editor) => {\n        const toolbarContainer = document.querySelector('#toolbar-container')\n        toolbarContainer.appendChild(editor.ui.view.toolbar.element)\n      })\n      .catch((error) => {\n        // eslint-disable-next-line no-console\n        console.error(error)\n      })\n  }\n}\n<\/script>")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Not So Minimal Demo: "),n("a",{attrs:{href:"https://edusanjal.com/preeti-to-unicode/",target:"_blank",rel:"noopener"}},[e._v("Preeti to Unicode converter")])])}],!1,null,null,null);t.default=component.exports}}]);