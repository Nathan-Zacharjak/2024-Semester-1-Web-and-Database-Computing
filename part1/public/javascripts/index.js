const vueinst = new Vue({
    el: '#app',
    data: {
        searchQuery: {
            size: '',
            style: '',
            brand: '',
            price: ''
        },
        searchResults: []
    },
    methods: {
        UpdateSearchResults: function (event) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200 && xhttp.responseText !== 'empty search') {
                    vueinst.searchResults = JSON.parse(xhttp.responseText);
                }
            };

            xhttp.open('POST', '/search', true);
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.send(JSON.stringify(vueinst.searchQuery));
        }
    }
});

