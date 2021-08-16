(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(e,t,n){"use strict";var r={props:["title","published","updated","archived"],head:function(){return{title:this.title}}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title",attrs:{itemprop:"name headline"}},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"time"},[e._v("Published: "),n("time",{attrs:{itemprop:"datePublished"}},[e._v(e._s(e.published))])]),e._v(" "),e.updated?n("div",{staticClass:"time"},[e._v("Updated: "),n("time",{attrs:{itemprop:"dateModified"}},[e._v(e._s(e.updated))])]):e._e(),e._v(" "),e.archived?n("div",{staticClass:"block"},[e._v("Note: This is an archived post. Information may not be relevant now.")]):e._e()])}),[],!1,null,null,null);t.a=component.exports},179:function(e,t,n){"use strict";n.r(t);n(23);var r=n(170);function o(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",i=0,n=e.length;i<15;++i)t+=e.charAt(Math.floor(Math.random()*n));return t}function d(e){e.focus(),e.select(),document.execCommand("copy")}var c={mixins:[r.a],components:{BlogTitle:r.a},data:function(){return{project_dir:"app",user:"user",user_password:o(),db_name:"db_name",db_user:"db_user",db_password:o(),remote:"awecode.com",ssh_port:"22",django_project:"django_project"}},methods:{regenerate_user:function(){this.user_password=o()},regenerate_db:function(){this.db_password=o()},copy_user:function(){d(document.getElementsByName("user_password")[0])},copy_db:function(){d(document.getElementsByName("db_password")[0])},download:function(){var element=document.createElement("a"),content=function(form){for(var e={},t=form.querySelectorAll("input, select, textarea"),i=0;i<t.length;++i){var element=t[i],n=element.name,r=element.value;n&&(e[n]=r)}return JSON.stringify(e)}(document.getElementById("django-form"));element.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(content)),element.setAttribute("download",this.django_project+".json"),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},l=n(8),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("BlogTitle",{attrs:{title:"Cleaning up Ubuntu Server",published:"22 Mar 2020"}}),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{itemprop:"articleBody"}},[e._v("\n      An Ubuntu server instance can be cleaned by removing some unwanted\n      packages and disabling services. This saves some disk space and also frees\n      up memory.\n\n      "),n("h2",[e._v("Cleanup unnecessary packages")]),e._v(" "),e._m(0),e._v("\n\n      Very few server instances utilize these packages. Make sure you don't need\n      them before removing them.\n\n      "),n("h2",[e._v("Remove unattended upgrades [CAUTION]")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),n("h2",[e._v("Other unwanted services")]),e._v(" "),e._m(4),e._v("\n\n      Use the above command to list all services running in your server. Disable\n      the services you don't need.\n\n      "),n("h2",[e._v("Remove orphan packages")]),e._v(" "),e._m(5),e._v("\n\n      This removes packages required as dependencies of previously installed\n      packages which have been removed now.\n    ")])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo apt purge --auto-remove snapd squashfs-tools friendly-recovery apport at")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo apt purge --auto-remove unattended-upgrades\nsudo systemctl disable apt-daily-upgrade.timer\nsudo systemctl mask apt-daily-upgrade.service\nsudo systemctl disable apt-daily.timer\nsudo systemctl mask apt-daily.service")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("This removes the "),n("i",{staticClass:"hl"},[e._v("unattended-upgrades")]),e._v(" package and the\n      associated services which are reponsible for automatically updating\n      packages in the system. Although removing this package saves disk space\n      and also removes its services running in the background, this is not\n      recommended. You can instead configure\n      "),n("i",{staticClass:"hl"},[e._v("unattended-upgrades")]),e._v(" to install just the security\n      updates.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Enable only security updates by commenting other origins from "),n("span",{staticClass:"hl"},[e._v("unattended-upgrades")]),e._v(" apt configuration.\n      Commented lines start with "),n("span",{staticClass:"hl"},[e._v("//")]),e._v(".\n      "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo vim /etc/apt/apt.conf.d/50unattended-upgrades")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("service --status-all")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo apt autoremove --purge")])])}],!1,null,null,null);t.default=component.exports}}]);