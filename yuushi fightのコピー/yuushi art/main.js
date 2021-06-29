
Vue.component('image-lists', {
    props: ['image'],
    template: '<li class="image-lists"><img class="photo" v-bind:src="image.path" v-on:click="openModal"><div id="overlay" v-show="showContent" v-on:click="closeModal"><div class="content"><img class="photo_up" v-bind:src="image.path"></div></div></li>',
    data:function(){
        return{
            showContent:false
        }
    },
    methods:{
        openModal: function(){
            this.showContent = true
          },
          closeModal: function(){
            this.showContent = false
    }
    }
}
)
var app = new Vue({
    el:'#app',
    data: {
        images:[
            {id:1, path:"../img/4.JPG"},
            {id:2, path:"../img/5.JPG"},
            {id:3, path:"../img/6.JPG"},
            {id:4, path:"../img/7.JPG"},
            {id:5, path:"../img/8.JPG"},
            {id:6, path:"../img/9.JPG"},
            {id:7, path:"../img/10.JPG"},
            {id:8, path:"../img/11.JPG"},
            {id:9, path:"../img/12.JPG"},
            {id:10, path:"../img/13.JPG"},
            {id:11, path:"../img/14.JPG"},
            {id:12, path:"../img/15.JPG"},
            {id:13, path:"../img/16.JPG"},
            {id:14, path:"../img/17.JPG"},
    ]},
    methods: {
    }
    })