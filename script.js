var app = new Vue({
    el:'#app',
    data:{
        json:"",
        movieKey:"",
        oldJson : ''
    },
    mounted:function(){
        this.request('The+Dark+Knight')
    },
    methods:{
        request: function(movieKey) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `https://www.omdbapi.com/?t=${movieKey}&apikey=4a15a3ad`);

            xhr.onload = function(){
                if (xhr.status === 200){
                    if (app._data.json != null){
                        app._data.oldJson = app._data.json;
                    }
                    app._data.json = JSON.parse(xhr.responseText);
                }
                else{
                    console.log(xhr.status)
                }
            }
            xhr.send();
        },
        newApi: function(){
            this.request(app._data.movieKey);
        }
    }
})