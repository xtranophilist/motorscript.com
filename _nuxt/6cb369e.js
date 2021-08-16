(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{170:function(e,t,n){"use strict";var r={props:["title","published","updated","archived"],head:function(){return{title:this.title}}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title",attrs:{itemprop:"name headline"}},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"time"},[e._v("Published: "),n("time",{attrs:{itemprop:"datePublished"}},[e._v(e._s(e.published))])]),e._v(" "),e.updated?n("div",{staticClass:"time"},[e._v("Updated: "),n("time",{attrs:{itemprop:"dateModified"}},[e._v(e._s(e.updated))])]):e._e(),e._v(" "),e.archived?n("div",{staticClass:"block"},[e._v("Note: This is an archived post. Information may not be relevant now.")]):e._e()])}),[],!1,null,null,null);t.a=component.exports},188:function(e,t,n){"use strict";n.r(t);n(23);var r=n(170);function o(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",i=0,n=e.length;i<15;++i)t+=e.charAt(Math.floor(Math.random()*n));return t}function l(e){e.focus(),e.select(),document.execCommand("copy")}var c={mixins:[r.a],components:{BlogTitle:r.a},data:function(){return{project_dir:"app",user:"user",ip:"143.666.7.343",user_password:o(),db_name:"db_name",db_user:"db_user",db_password:o(),remote:"awecode.com",ssh_port:"22",django_project:"django_project"}},methods:{regenerate_user:function(){this.user_password=o()},regenerate_db:function(){this.db_password=o()},copy_user:function(){l(document.getElementsByName("user_password")[0])},copy_db:function(){l(document.getElementsByName("db_password")[0])},download:function(){var element=document.createElement("a"),content=function(form){for(var e={},t=form.querySelectorAll("input, select, textarea"),i=0;i<t.length;++i){var element=t[i],n=element.name,r=element.value;n&&(e[n]=r)}return JSON.stringify(e)}(document.getElementById("django-form"));element.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(content)),element.setAttribute("download",this.django_project+".json"),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},d=n(8),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("BlogTitle",{attrs:{title:"Simple Django Deployment Cheat-sheet",published:"23 Nov 2014",updated:"21 Feb 2021"}}),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{itemprop:"articleBody"}},[n("div",{staticClass:"block"},[n("ul",[n("form",{attrs:{id:"django-form"}},[n("div",{staticClass:"right btn small",on:{click:e.download}},[e._v("\n              Download form data\n            ")]),e._v(" "),n("li",[e._v("Domain Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.remote,expression:"remote"}],attrs:{name:"remote"},domProps:{value:e.remote},on:{input:function(t){t.target.composing||(e.remote=t.target.value)}}})]),e._v(" "),n("li",[e._v("IP Address: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ip,expression:"ip"}],attrs:{name:"ip"},domProps:{value:e.ip},on:{input:function(t){t.target.composing||(e.ip=t.target.value)}}})]),e._v(" "),n("li",[e._v("User on Server : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{name:"user"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),e._v(" "),n("li",[e._v("\n              User Password :\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_password,expression:"user_password"}],attrs:{name:"user_password"},domProps:{value:e.user_password},on:{input:function(t){t.target.composing||(e.user_password=t.target.value)}}}),e._v(" "),n("a",{staticClass:"l1 small",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.regenerate_user(t)}}},[e._v("Regenerate")]),e._v(" "),n("a",{staticClass:"l1 small",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.copy_user(t)}}},[e._v("Copy")])]),e._v(" "),n("li",[e._v("SSH Port : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ssh_port,expression:"ssh_port"}],attrs:{name:"ssh_port"},domProps:{value:e.ssh_port},on:{input:function(t){t.target.composing||(e.ssh_port=t.target.value)}}})]),e._v(" "),n("li",[e._v("\n              Django Project Name :\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.django_project,expression:"django_project"}],attrs:{name:"django_project"},domProps:{value:e.django_project},on:{input:function(t){t.target.composing||(e.django_project=t.target.value)}}})]),e._v(" "),n("li",[e._v("Database Name : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.db_name,expression:"db_name"}],attrs:{name:"db_name"},domProps:{value:e.db_name},on:{input:function(t){t.target.composing||(e.db_name=t.target.value)}}})]),e._v(" "),n("li",[e._v("Database User : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.db_user,expression:"db_user"}],attrs:{name:"db_user"},domProps:{value:e.db_user},on:{input:function(t){t.target.composing||(e.db_user=t.target.value)}}})]),e._v(" "),n("li",[e._v("\n              Database Password :\n              "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.db_password,expression:"db_password"}],attrs:{name:"db_password"},domProps:{value:e.db_password},on:{input:function(t){t.target.composing||(e.db_password=t.target.value)}}}),e._v(" "),n("a",{staticClass:"l1 small",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.regenerate_db(t)}}},[e._v("Regenerate")]),e._v(" "),n("a",{staticClass:"l1 small",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.copy_db(t)}}},[e._v("Copy")])])])])]),e._v(" "),n("h3",[e._v("Create a sudo user")]),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("useradd -m "+e._s(e.user)+"\necho "+e._s(e.user)+":"+e._s(e.user_password)+"| chpasswd\nusermod -aG sudo "+e._s(e.user)+"\nchsh --shell /bin/bash "+e._s(e.user)+"\nsu - "+e._s(e.user))])]),e._v("\n      Add "),n("i",{staticClass:"hl"},[e._v(e._s(e.user))]),e._v(" to\n      "),n("i",{staticClass:"hl"},[e._v("/etc/ssh/sshd_config")]),e._v(" "),n("i",{staticClass:"hl"},[e._v("AllowUsers")]),e._v(" configuration if\n      "),n("i",{staticClass:"hl"},[e._v("AllowUsers")]),e._v(" is used to allow specific user logins via\n      SSH.\n\n      "),n("h3",[e._v("Setup Database")]),e._v("\n      Install Postgresql:\n      "),e._m(0),e._v("\n      Enable and start Postgresql\n      "),e._m(1),e._v("\n      Create database and role:\n      "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo su - postgres\ncreatedb "+e._s(e.db_name)+'\necho "CREATE ROLE '+e._s(e.db_user)+" WITH PASSWORD '"+e._s(e.db_password)+'\';" | psql\necho "ALTER ROLE '+e._s(e.db_user)+' WITH LOGIN;" | psql\necho "GRANT ALL PRIVILEGES ON DATABASE "'+e._s(e.db_name)+'" to '+e._s(e.db_user)+';" | psql\nexit')])]),e._v(" "),n("h3",[e._v("Setup pushing via Git")]),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$","data-output":"9, 11-15"}},[n("code",[e._v("cd\nmkdir repo.git "+e._s(e.project_dir)+" conf logs media static\ncd repo.git\ngit init --bare\ngit --bare update-server-info\ngit config core.bare false\ngit config receive.denycurrentbranch ignore\ngit config core.worktree /home/"+e._s(e.user)+"/"+e._s(e.project_dir)+"/\n\ncat > hooks/post-receive <<EOF\n#!/bin/sh\ngit checkout -f\ncd ../app/\n./deploy.sh\nEOF\n\nchmod +x hooks/post-receive\ncd")])]),e._v("\n\n      Add this bare repo as a remote on local.\n\n      "),"22"==e.ssh_port?n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("git remote add server "+e._s(e.user)+"@"+e._s(e.ip)+":/home/"+e._s(e.user)+"/repo.git/\nssh-copy-id "+e._s(e.user)+"@"+e._s(e.ip)+"\ngit push server --all")])]):n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("git remote add server ssh://"+e._s(e.user)+"@"+e._s(e.ip)+":"+e._s(e.ssh_port)+"/home/"+e._s(e.user)+"/repo.git/\nssh-copy-id -p "+e._s(e.ssh_port)+" "+e._s(e.user)+"@"+e._s(e.ip)+"\ngit push server --all")])]),e._v(" "),e._m(2),e._v(" "),n("h3",[e._v("Install Required Libraries and Packages")]),e._v(" "),e._m(3),e._v(" "),n("h3",[e._v("Setup the Project")]),e._v(" "),e._m(4),e._v("\n      Also, try running "),n("code",[e._v("./manage.py runserver")]),e._v(" to see if everything\n      is all right.\n\n      "),n("h3",[e._v("Install Supervisor")]),e._v(" "),e._m(5),e._v(" "),n("h4",[e._v("Create supervisor configuration")]),e._v(" "),e._m(6),e._v(" "),n("pre",{staticClass:"language-ini code-content"},[n("code",[e._v("[program:"+e._s(e.django_project)+"]\ncommand=/home/"+e._s(e.user)+"/env/bin/gunicorn "+e._s(e.django_project)+".wsgi:application --workers 3 --bind 127.0.0.1:8000\n#command=/home/"+e._s(e.user)+"/env/bin/gunicorn "+e._s(e.django_project)+".wsgi:application -c /home/"+e._s(e.user)+"/app/gunicorn.conf.py\nuser="+e._s(e.user)+"\ndirectory=/home/"+e._s(e.user)+"/app/\nstdout_logfile=/home/"+e._s(e.user)+"/logs/django.log\nstderr_logfile=/home/"+e._s(e.user)+"/logs/django_err.log\n")])]),e._v(" "),e._m(7),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo ln -s /home/"+e._s(e.user)+"/conf/supervisor.conf /etc/supervisor/conf.d/"+e._s(e.django_project)+".conf\nsudo supervisorctl reload")])]),e._v(" "),n("h4",[e._v("\n        Allow user to restart supervisor process without having to use the\n        password\n      ")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),n("h3",[e._v("Install redis")]),e._v(" "),e._m(10),e._v(" "),n("h3",[e._v("Install nginx")]),e._v(" "),e._m(11),e._v(" "),n("h3",[e._v("Configure nginx with security headers")]),e._v(" "),e._m(12),e._v(" "),n("pre",{staticClass:"language-nginx code-content"},[n("code",[e._v("upstream "+e._s(e.django_project)+" {\n    server 127.0.0.1:8000;\n    # server unix:/tmp/"+e._s(e.django_project)+";\n}\n\n# Redirect www."+e._s(e.remote)+" to "+e._s(e.remote)+"\nserver {\n    listen 80;\n    server_name  www."+e._s(e.remote)+";\n    return       301 https://"+e._s(e.remote)+"$request_uri;\n}\n\nserver {\n    listen 80;\n    server_name "+e._s(e.remote)+";\n\n    #access_log /home/"+e._s(e.user)+"/logs/nginx.access.log;\n    error_log /home/"+e._s(e.user)+"/logs/nginx.error.log;\n\n    #limit_conn conn_limit_per_ip 100;\n    #limit_req zone=req_limit_per_ip burst=100 nodelay;\n\n    location /robots.txt {\n        alias /home/"+e._s(e.user)+"/static/robots.txt;\n    }\n    \n    location /favicon.ico {\n        alias /home/"+e._s(e.user)+"/static/img/favicon.ico;\n    }\n    \n    location ~ ^/(media|static)/  {\n        root    /home/"+e._s(e.user)+"/;\n        expires 30d;\n    }\n\n    location / {\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host $http_host;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_redirect off;\n        proxy_pass http://"+e._s(e.django_project)+';\n        client_max_body_size 50m;\n        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;\n        add_header X-Content-Type-Options nosniff;\n        add_header X-XSS-Protection "1; mode=block";\n        add_header X-Frame-Options SAMEORIGIN;\n    }\n    \n    # Prevent hidden files (beginning with a period) from being served\n    location ~ /\\. { access_log off; log_not_found off; deny all; }\n}')])]),e._v(" "),e._m(13),e._v(" "),n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("sudo ln -s /home/"+e._s(e.user)+"/conf/nginx.conf /etc/nginx/conf.d/"+e._s(e.django_project)+".conf")])]),e._v(" "),n("h3",[e._v("Obtain SSL certificate with Certbot")]),e._v(" "),e._m(14),e._v(" "),n("h4",[e._v("Check configuration and restart nginx")]),e._v(" "),e._m(15)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt-get install postgresql postgresql-contrib")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("systemctl enable postgresql\nsystemctl start postgresql")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        You may want to modify your "),n("i",{staticClass:"hl"},[e._v("git post-receive")]),e._v(" hook to\n        run custom commands on the server, like running database migrations,\n        notifying services of new deployments, pushing static files to CDN, etc.\n        A "),n("span",{staticClass:"hl"},[e._v("deploy.sh")]),e._v(" file with executable permission is\n        expected in the project root in this example post-receive hook.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt install python3-pip\npip3 install virtualenv")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("cd\nvirtualenv env -p python3\nsource env/bin/activate\ncd app\npip install -r requirements/prod.txt\npip install gunicorn\npython manage.py migrate\npython manage.py collectstatic")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt install supervisor\nsystemctl enable supervisor\nsystemctl start supervisor")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("cd\nvim conf/supervisor.conf")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[e._v("\n        Soft-link our configuration to supervisor "),n("code",[e._v("conf.d")]),e._v(" directory\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("vi /etc/sudoers.d/supervisor_edusanjal")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash code-content"},[n("code",[e._v("esdj1x ALL = (root) NOPASSWD:/usr/bin/supervisorctl restart edusanjal")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt install redis-server\nsystemctl enable redis-server\nsystemctl start redis-server")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt install nginx\nsystemctl enable nginx\nrm /etc/nginx/sites-enabled/default")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"$"}},[n("code",[e._v("cd\nvim conf/nginx.conf")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[e._v("\n        Soft-link our configuration to nginx "),n("code",[e._v("conf.d")]),e._v(" directory\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("apt install certbot python-certbot-nginx\ncertbot --nginx")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-bash command-line",attrs:{"data-prompt":"#"}},[n("code",[e._v("nginx -t\nsystemctl restart nginx")])])}],!1,null,null,null);t.default=component.exports}}]);