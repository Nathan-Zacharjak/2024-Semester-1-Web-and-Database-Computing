const vueinst = new Vue({
    el: '#app',
    data: {
        title: '',
        content: '',
        posts: [],
        tcs_show: false
    },
    methods: {
        makepost: function (event){
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 403) {
                    vueinst.tcs_show = true;
                }
            };

            xhttp.open('POST', '/users/addpost', true);

            var postObj = {
                title: this.title,
                content: this.content
            };
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.send(JSON.stringify(postObj));
        },
        getposts: function (event) {
          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    var posts = JSON.parse(this.responseText);

                    vueinst.posts = [];
                    for (const post of posts) {
                        vueinst.posts.push(post);
                    }
                } else if (this.status === 403){
                    vueinst.tcs_show = true;
                }
            }
          };

          xhttp.open('GET', '/users/getposts?n=5', true);
          xhttp.send();
        },
        tcs_accept: function (event) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function (){
                if (this.readyState === 4 && this.status === 200) {
                    vueinst.tcs_show = false;
                }
            };

            xhttp.open('POST', '/tcaccept', true);
            xhttp.send();
        }
    }
});
