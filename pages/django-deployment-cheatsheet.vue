<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Simple Django Deployment Cheat-sheet"
      published="23 Nov 2014"
      updated="21 Feb 2021"
    />

    <div class="content" itemprop="articleBody" v-highlight>
      <div class="block">
        <ul>
          <form id="django-form">
            <div class="right btn small" @click="download">
              Download form data
            </div>
            <li>Domain Name: <input name="remote" v-model="remote" /></li>
            <li>IP Address: <input name="ip" v-model="ip" /></li>
            <li>User on Server : <input name="user" v-model="user" /></li>
            <li>
              User Password :
              <input name="user_password" v-model="user_password" />
              <a class="l1 small" href="#" @click.prevent="regenerate_user"
                >Regenerate</a
              >
              <a class="l1 small" href="#" @click.prevent="copy_user">Copy</a>
            </li>
            <li>SSH Port : <input name="ssh_port" v-model="ssh_port" /></li>
            <li>
              Django Project Name :
              <input name="django_project" v-model="django_project" />
            </li>
            <li>Database Name : <input name="db_name" v-model="db_name" /></li>
            <li>Database User : <input name="db_user" v-model="db_user" /></li>
            <li>
              Database Password :
              <input name="db_password" v-model="db_password" />
              <a class="l1 small" href="#" @click.prevent="regenerate_db"
                >Regenerate</a
              >
              <a class="l1 small" href="#" @click.prevent="copy_db">Copy</a>
            </li>
          </form>
        </ul>
      </div>

      <h3>Create a sudo user</h3>

      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>useradd -m {{user}}
echo {{user}}:{{user_password}}| chpasswd
usermod -aG sudo {{user}}
chsh --shell /bin/bash {{user}}
su - {{user}}</code></pre>
      Add <i class="hl">{{ user }}</i> to
      <i class="hl">/etc/ssh/sshd_config</i>
      <i class="hl">AllowUsers</i> configuration if
      <i class="hl">AllowUsers</i> is used to allow specific user logins via
      SSH.

      <h3>Setup Database</h3>
      Install Postgresql:
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>apt-get install postgresql postgresql-contrib</code></pre>
      Enable and start Postgresql
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>systemctl enable postgresql
systemctl start postgresql</code></pre>
      Create database and role:
      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>sudo su - postgres
createdb {{db_name}}
echo "CREATE ROLE {{db_user}} WITH PASSWORD '{{db_password}}';" | psql
echo "ALTER ROLE {{db_user}} WITH LOGIN;" | psql
echo "GRANT ALL PRIVILEGES ON DATABASE "{{db_name}}" to {{db_user}};" | psql
exit</code></pre>

      <h3>Setup pushing via Git</h3>

      <pre
        class="language-bash command-line"
        data-prompt="$"
        data-output="9, 11-15"
      >
<code>cd
mkdir repo.git {{project_dir}} conf logs media static
cd repo.git
git init --bare
git --bare update-server-info
git config core.bare false
git config receive.denycurrentbranch ignore
git config core.worktree /home/{{user}}/{{project_dir}}/

cat &gt; hooks/post-receive &lt;&lt;EOF
#!/bin/sh
git checkout -f
cd ../app/
./deploy.sh
EOF

chmod +x hooks/post-receive
cd</code></pre>

      Add this bare repo as a remote on local.

      <pre
        v-if="ssh_port == '22'"
        class="language-bash command-line"
        data-prompt="$"
      >
<code>git remote add server {{user}}@{{ip}}:/home/{{user}}/repo.git/
ssh-copy-id {{user}}@{{ip}}
git push server --all</code></pre>

      <pre v-else class="language-bash command-line" data-prompt="$">
<code>git remote add server ssh://{{user}}@{{ip}}:{{ssh_port}}/home/{{user}}/repo.git/
ssh-copy-id -p {{ssh_port}} {{user}}@{{ip}}
git push server --all</code></pre>

      <p>
        You may want to modify your <i class="hl">git post-receive</i> hook to
        run custom commands on the server, like running database migrations,
        notifying services of new deployments, pushing static files to CDN, etc.
        A <span class="hl">deploy.sh</span> file with executable permission is
        expected in the project root in this example post-receive hook.
      </p>

      <!--<code data-gist-id="8001624" data-gist-hide-footer="true" data-gist-caption="this/is/a/sample/path/to/file.extension"-->
      <!--data-gist-file="example-file2.html"></code>-->

      <h3>Install Required Libraries and Packages</h3>

      <pre class="language-bash command-line" data-prompt="#">
<code>apt install python3-pip
pip3 install virtualenv</code></pre>

      <h3>Setup the Project</h3>
      <pre class="language-bash command-line" data-prompt="$">
<code>cd
virtualenv env -p python3
source env/bin/activate
cd app
pip install -r requirements/prod.txt
pip install gunicorn
python manage.py migrate
python manage.py collectstatic</code></pre>
      Also, try running <code>./manage.py runserver</code> to see if everything
      is all right.

      <h3>Install Supervisor</h3>
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>apt install supervisor
systemctl enable supervisor
systemctl start supervisor</code></pre>

      <h4>Create supervisor configuration</h4>

      <pre class="language-bash command-line" data-prompt="$">
<code>cd
vim conf/supervisor.conf</code></pre>

      <pre class="language-ini code-content"><code>[program:{{django_project}}]
command=/home/{{user}}/env/bin/gunicorn {{django_project}}.wsgi:application --workers 3 --bind 127.0.0.1:8000
#command=/home/{{user}}/env/bin/gunicorn {{django_project}}.wsgi:application -c /home/{{user}}/app/gunicorn.conf.py
user={{user}}
directory=/home/{{user}}/app/
stdout_logfile=/home/{{user}}/logs/django.log
stderr_logfile=/home/{{user}}/logs/django_err.log
</code></pre>

      <h4>
        Soft-link our configuration to supervisor <code>conf.d</code> directory
      </h4>
      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>sudo ln -s /home/{{user}}/conf/supervisor.conf /etc/supervisor/conf.d/{{django_project}}.conf
sudo supervisorctl reload</code></pre>

      <h4>
        Allow user to restart supervisor process without having to use the
        password
      </h4>

      <pre class="language-bash command-line" data-prompt="$">
<code>vi /etc/sudoers.d/supervisor_{{django_project}}</code></pre>

      <pre
        class="language-bash code-content"
      ><code>{{user}} ALL = (root) NOPASSWD:/usr/bin/supervisorctl restart {{django_project}}</code></pre>

      <h3>Install redis</h3>
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>apt install redis-server
systemctl enable redis-server
systemctl start redis-server</code></pre>

      <h3>Install nginx</h3>
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>apt install nginx
systemctl enable nginx
rm /etc/nginx/sites-enabled/default</code></pre>

      <h3>Configure nginx with security headers</h3>

      <pre class="language-bash command-line" data-prompt="$"><code>cd
vim conf/nginx.conf</code></pre>

      <pre
        class="language-nginx code-content"
      ><code>upstream {{django_project}} {
    server 127.0.0.1:8000;
    # server unix:/tmp/{{django_project}};
}

# Redirect www.{{remote}} to {{remote}}
server {
    listen 80;
    server_name  www.{{remote}};
    return       301 https://{{remote}}$request_uri;
}

server {
    listen 80;
    server_name {{remote}};

    #access_log /home/{{user}}/logs/nginx.access.log;
    error_log /home/{{user}}/logs/nginx.error.log;

    #limit_conn conn_limit_per_ip 100;
    #limit_req zone=req_limit_per_ip burst=100 nodelay;

    location /robots.txt {
        alias /home/{{user}}/static/robots.txt;
    }
    
    location /favicon.ico {
        alias /home/{{user}}/static/img/favicon.ico;
    }
    
    location ~ ^/(media|static)/  {
        root    /home/{{user}}/;
        expires 30d;
    }

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_pass http://{{django_project}};
        client_max_body_size 50m;
        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Frame-Options SAMEORIGIN;
    }
    
    # Prevent hidden files (beginning with a period) from being served
    location ~ /\. { access_log off; log_not_found off; deny all; }
}</code></pre>

      <h4>
        Soft-link our configuration to nginx <code>conf.d</code> directory
      </h4>

      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>sudo ln -s /home/{{user}}/conf/nginx.conf /etc/nginx/conf.d/{{django_project}}.conf</code></pre>

      <h3>Obtain SSL certificate with Certbot</h3>
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>apt install certbot python-certbot-nginx
certbot --nginx</code></pre>

      <h4>Check configuration and restart nginx</h4>
      <pre class="language-bash command-line" data-prompt="#"><code>nginx -t
systemctl restart nginx</code></pre>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

// https://stackoverflow.com/questions/1497481/javascript-password-generator/1497512#1497512
function generatePassword() {
  let length = 15,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// https://codepen.io/gabrieleromanato/pen/LpLVeQ
function toJSONString(form) {
  let obj = {};
  let elements = form.querySelectorAll("input, select, textarea");
  for (let i = 0; i < elements.length; ++i) {
    let element = elements[i];
    let name = element.name;
    let value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}

function copyText(el) {
  el.focus();
  el.select();
  document.execCommand("copy");
}

export default {
  mixins: [BlogTitle],
  components: { BlogTitle },
  data() {
    let user_password = generatePassword();
    let db_password = generatePassword();
    return {
      project_dir: "app",
      user: "user",
      ip: "143.666.7.343",
      user_password: user_password,
      db_name: "db_name",
      db_user: "db_user",
      db_password: db_password,
      remote: "awecode.com",
      ssh_port: "22",
      django_project: "django_project"
    };
  },
  methods: {
    regenerate_user() {
      this.user_password = generatePassword();
    },
    regenerate_db() {
      this.db_password = generatePassword();
    },
    copy_user() {
      copyText(document.getElementsByName("user_password")[0]);
    },
    copy_db() {
      copyText(document.getElementsByName("db_password")[0]);
    },
    // https://jsfiddle.net/ourcodeworld/rce6nn3z/2
    download() {
      const element = document.createElement("a");
      let content = toJSONString(document.getElementById("django-form"));
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(content)
      );
      element.setAttribute("download", this.django_project + ".json");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
};
</script>
