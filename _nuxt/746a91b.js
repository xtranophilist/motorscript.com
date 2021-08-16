(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{170:function(e,t,n){"use strict";var r={props:["title","published","updated","archived"],head:function(){return{title:this.title}}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title",attrs:{itemprop:"name headline"}},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"time"},[e._v("Published: "),n("time",{attrs:{itemprop:"datePublished"}},[e._v(e._s(e.published))])]),e._v(" "),e.updated?n("div",{staticClass:"time"},[e._v("Updated: "),n("time",{attrs:{itemprop:"dateModified"}},[e._v(e._s(e.updated))])]):e._e(),e._v(" "),e.archived?n("div",{staticClass:"block"},[e._v("Note: This is an archived post. Information may not be relevant now.")]):e._e()])}),[],!1,null,null,null);t.a=component.exports},217:function(e,t,n){"use strict";n.r(t);n(24),n(25),n(10),n(23);var r=n(170);function o(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",i=0,n=e.length;i<15;++i)t+=e.charAt(Math.floor(Math.random()*n));return t}var c={mixins:[r.a],components:{BlogTitle:r.a},data:function(){var e=o();o();return{project_dir:"app",user:"user",ip:"143.666.7.343",user_password:e,project_name:"awecode",remote:"awecode.com",ssh_port:"22",firebase:!1,nvm:!1,node_ver:"14.6.0"}},computed:{gitOutputLines:function(){var e=18;return this.firebase&&(e+=1),this.nvm&&(e+=2),"9, 11-"+e.toString()}},methods:{regenerate_user:function(){this.user_password=o()},copy_user:function(){var e;(e=document.getElementsByName("user_password")[0]).focus(),e.select(),document.execCommand("copy")},download:function(){var element=document.createElement("a"),content=function(form){for(var e={},t=form.querySelectorAll("input, select, textarea"),i=0;i<t.length;++i){var element=t[i],n=element.name,r=element.value;n&&(e[n]=r)}return JSON.stringify(e)}(document.getElementById("nuxt-form"));element.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(content)),element.setAttribute("download",this.project_name+".json"),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},l=n(8),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("BlogTitle",{attrs:{title:"Cheat-sheet: Nuxt.js Deployment with Git",published:"07 Mar 2020"}}),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{itemprop:"articleBody"}},[n("div",{staticClass:"block"},[n("ul",[n("form",{attrs:{id:"nuxt-form"}},[n("div",{staticClass:"right btn small",on:{click:e.download}},[e._v("\n              Download form data\n            ")]),e._v(" "),n("li",[e._v("Domain Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.remote,expression:"remote"}],attrs:{name:"remote"},domProps:{value:e.remote},on:{input:function(t){t.target.composing||(e.remote=t.target.value)}}})]),e._v(" "),n("li",[e._v("IP Address: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ip,expression:"ip"}],attrs:{name:"ip"},domProps:{value:e.ip},on:{input:function(t){t.target.composing||(e.ip=t.target.value)}}})]),e._v(" "),n("li",[e._v("User on Server : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{name:"user"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),e._v(" "),n("li",[e._v("\n              User Password :\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_password,expression:"user_password"}],attrs:{name:"user_password"},domProps:{value:e.user_password},on:{input:function(t){t.target.composing||(e.user_password=t.target.value)}}}),e._v(" "),n("a",{staticClass:"l1 small",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.regenerate_user(t)}}},[e._v("Regenerate")]),e._v(" "),n("a",{staticClass:"l1 small",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.copy_user(t)}}},[e._v("Copy")])]),e._v(" "),n("li",[e._v("SSH Port : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ssh_port,expression:"ssh_port"}],attrs:{name:"ssh_port"},domProps:{value:e.ssh_port},on:{input:function(t){t.target.composing||(e.ssh_port=t.target.value)}}})]),e._v(" "),n("li",[e._v("\n              Project Name :\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.project_name,expression:"project_name"}],attrs:{name:"project_name"},domProps:{value:e.project_name},on:{input:function(t){t.target.composing||(e.project_name=t.target.value)}}})]),e._v(" "),n("li",[e._v("\n              Use Firebase as CDN?\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firebase,expression:"firebase"}],attrs:{name:"firebase",type:"checkbox"},domProps:{checked:Array.isArray(e.firebase)?e._i(e.firebase,null)>-1:e.firebase},on:{change:function(t){var n=e.firebase,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.firebase=n.concat([null])):c>-1&&(e.firebase=n.slice(0,c).concat(n.slice(c+1)))}else e.firebase=o}}})]),e._v(" "),n("li",[e._v("\n              Manage multiple node versions on server with NVM?\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nvm,expression:"nvm"}],attrs:{name:"nvm",type:"checkbox"},domProps:{checked:Array.isArray(e.nvm)?e._i(e.nvm,null)>-1:e.nvm},on:{change:function(t){var n=e.nvm,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.nvm=n.concat([null])):c>-1&&(e.nvm=n.slice(0,c).concat(n.slice(c+1)))}else e.nvm=o}}})]),e._v(" "),e.nvm?n("li",[e._v("\n              Node version for the app?\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.node_ver,expression:"node_ver"}],attrs:{name:"node_ver"},domProps:{value:e.node_ver},on:{input:function(t){t.target.composing||(e.node_ver=t.target.value)}}})]):e._e()])])]),e._v(" "),n("h3",[e._v("Create a sudo user")]),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("useradd -m "+e._s(e.user)+"\necho "+e._s(e.user)+":"+e._s(e.user_password)+"| chpasswd\nusermod -aG sudo "+e._s(e.user)+"\nchsh --shell /bin/bash "+e._s(e.user)+"\nsu - "+e._s(e.user))])]),e._v(" "),n("p",[e._v("\n        Add "),n("i",{staticClass:"hl"},[e._v(e._s(e.user))]),e._v(" to\n        "),n("i",{staticClass:"hl"},[e._v("/etc/ssh/sshd_config")]),e._v(" "),n("i",{staticClass:"hl"},[e._v("AllowUsers")]),e._v(" configuration line if\n        "),n("i",{staticClass:"hl"},[e._v("AllowUsers")]),e._v(" is used to allow specific user logins via\n        SSH.\n      ")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("Install node")]),e._v(" "),e._m(1),e._v(" "),n("h3",[e._v("Install yarn and pm2")]),e._v(" "),e._m(2),e._v(" "),e.nvm?n("div",[e._m(3),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash\nnvm install "+e._s(e.node_ver)+"\nnvm use "+e._s(e.node_ver))])])]):e._e(),e._v(" "),e._m(4),e._v(" "),n("pre",{staticClass:"language-json"},[n("code",[e._v('{\n  "apps": [\n    {\n      "name": "'+e._s(e.project_name)+'",\n      "instances": "max",\n      "exec_mode": "cluster",\n      "script": "npm",\n      "args": "start",\n      "cwd": "/home/'+e._s(e.user)+'/app/",\n      "env": {\n        "HOST": "127.0.0.1",\n        "PORT": "3000",\n        "NODE_ENV": "production"\n      }\n    }\n  ]\n}\n')])]),e._v(" "),n("h3",[e._v("Setup pushing via Git")]),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$","data-output":e.gitOutputLines}},[n("code",[e._v("cd\nmkdir repo.git "+e._s(e.project_dir)+" conf logs\ncd repo.git\ngit init --bare\ngit --bare update-server-info\ngit config core.bare false\ngit config receive.denycurrentbranch ignore\ngit config core.worktree /home/"+e._s(e.user)+"/"+e._s(e.project_dir)+"\n\ncat > hooks/post-receive <<EOF\n#!/bin/bash\ngit checkout -f\ncd /home/"+e._s(e.user)+"/"+e._s(e.project_dir)+"\n"),e.nvm?[e._v("source ~/.nvm/nvm.sh\nnvm use "+e._s(e.node_ver)+"\n")]:e._e(),e._v("yarn\nyarn build "),e.firebase?[e._v("\nfirebase deploy \\\n")]:[e._v("\\\n")],e._v("&& pm2 restart pm2.json\nEOF\n\nchmod +x hooks/post-receive\ncd")],2)]),e._v("\n\n      Add this bare repo as a remote on local.\n\n      "),"22"==e.ssh_port?n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("git remote add server "+e._s(e.user)+"@"+e._s(e.ip)+":/home/"+e._s(e.user)+"/repo.git/\nssh-copy-id "+e._s(e.user)+"@"+e._s(e.ip)+"\ngit push server --all")])]):n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("git remote add server ssh://"+e._s(e.user)+"@"+e._s(e.ip)+":"+e._s(e.ssh_port)+"/home/"+e._s(e.user)+"/repo.git/\nssh-copy-id -p "+e._s(e.ssh_port)+" "+e._s(e.user)+"@"+e._s(e.ip)+"\ngit push server --all")])]),e._v(" "),e.nvm?n("div",[e._v("\n        If using multiple node versions managed by nvm, the post receive hook\n        switches node to the desired version before creating a build.\n      ")]):e._e(),e._v(" "),n("h3",[e._v("Install and configure nginx")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("pre",{staticClass:"language-nginx code-content"},[n("code",[e._v("#Redirect www to non-www\nserver {\n    server_name www."+e._s(e.remote)+";\n    return 301 $scheme://"+e._s(e.remote)+"$request_uri;\n}\n\nserver {\n    listen 80;\n    listen [::]:80;\n    index index.html;\n    server_name "+e._s(e.remote)+";\n\n    #access_log /home/"+e._s(e.user)+"/logs/nginx.access.log;\n    #error_log /home/"+e._s(e.user)+"/logs/nginx.error.log;\n\n    location /sitemap.xml {\n      alias /home/"+e._s(e.user)+"/sitemap.xml;\n    }\n\n    location / {\n      proxy_pass http://localhost:3000;\n      proxy_http_version 1.1;\n      proxy_set_header Upgrade $http_upgrade;\n      proxy_set_header Connection 'upgrade';\n      proxy_set_header Host $host;\n      proxy_cache_bypass $http_upgrade;\n      proxy_redirect off;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n")])]),e._v(" "),n("h4",[e._v("\n        Soft-link our configuration to nginx conf directory\n      ")]),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo ln -s /home/"+e._s(e.user)+"/conf/nginx.conf /etc/nginx/sites-enabled/"+e._s(e.project_name)+".conf")])]),e._v(" "),n("h3",[e._v("Obtain SSL certificate with Certbot")]),e._v(" "),e._m(7),e._v(" "),n("h4",[e._v("Check configuration and restart nginx")]),e._v(" "),e._m(8),e._v(" "),e.firebase?n("div",[n("h3",[e._v("Use Firebase as CDN")]),e._v(" "),e._m(9),e._v("\n\n        On the server,\n        "),e._m(10),e._v("\n        Firebase will ask a few questions.\n        "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v("\n        You can now manually deploy to test the Firebase configuration. The\n        deploy command is also be added to the\n        "),n("span",{staticClass:"hl"},[e._v("post-receive git hook")]),e._v(" so that on every push, the\n        built files are deployed to Firebase.\n        "),e._m(15)]):e._e()])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Refer to\n        "),n("a",{attrs:{href:"https://motorscript.com/security-hardening-ssh-linux-server/",target:"_blank"}},[e._v("Security: Hardening SSH on Linux Server")]),e._v("\n        for SSH Hardening cheatsheet.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt-get install -y nodejs")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v('curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\nsudo apt update && sudo apt install yarn\nsudo yarn global add pm2\npm2 startup')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[e._v("\n          If using different node versions in same server, install\n          "),n("span",{staticClass:"hl"},[e._v("nvm")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[e._v("Create "),n("span",{staticClass:"hl"},[e._v("pm2.json")]),e._v(" file in project root.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo apt-get install nginx")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("vim ~/conf/nginx.conf")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt install certbot python-certbot-nginx\ncertbot --nginx")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("nginx -t\nsystemctl restart nginx")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n          Create a new site for "),n("span",{staticClass:"hl"},[e._v("Hosting")]),e._v(" on a Firebase\n          project. You can create and manage Firebase projects from\n          "),n("a",{attrs:{href:"https://console.firebase.google.com/",target:"_blank"}},[e._v("the Firebase console.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("curl -sL https://firebase.tools | sudo bash\nfirebase login --no-localhost\nfirebase init")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"?"}},[n("code",[e._v("What do you want to use as your public directory?")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-text code-content mini"},[n("code",[e._v(".nuxt/dist/client")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"?"}},[n("code",[e._v("Configure as a single-page app (rewrite all urls to /index.html)? (y/N)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-text code-content mini"},[n("code",[e._v("N")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("firebase deploy")])])}],!1,null,null,null);t.default=component.exports}}]);