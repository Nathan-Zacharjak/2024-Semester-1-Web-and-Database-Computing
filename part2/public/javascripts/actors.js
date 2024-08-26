const vueinst = new Vue({
    el: '#app',
    data: {
        actors: [],
        first_name: '',
        last_name: ''
    },
    mounted(){
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var rows = JSON.parse(xhttp.responseText);
                vueinst.actors = rows;
            }
        };

        xhttp.open("GET", "/get_actors", true);
        xhttp.send();
    },
    methods: {
        addactor: function(event){
            var xhttp = new XMLHttpRequest();

            var postObj = {
                first_name: this.first_name,
                last_name: this.last_name
            };

            xhttp.open('POST', '/send_actor', true);
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.send(JSON.stringify(postObj));
        }
    }
});

