// ex01  

var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'hello Vue'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'hello Vue' + new Date()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})


var app4=new Vue({
    el:'#app4',
    data:{
        todos:[
        {text:'学习 JavaScript'},
        {text:'学习 Vue'},
        {text:'整个牛项目'},
        ]
    }
})
var app5=new Vue({
    el:'#app5',
    data:{
        message:'hello vue.js'
    },
    methods:{
        reverseMessage:function () {
            console.log(this)
            this.message=this.message.split('').reverse().join('');
        }
    }
})


var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello Vue!'
    }
})



// 定义一个组件
Vue.component('todo-item',{
   // todo-item 组件现在接受一个
   // "prop"，类似于一个自定义属性
   // 这个属性名为 todo。
   props:['todo'],
   template:'<li>这是一个代办的事情-{{todo.text}}---</li>'
})

var app7=new Vue({
    el:'#app7',
    data:{
       groceryList:[
       { text: '蔬菜' },
       { text: '奶酪' },
       { text: '随便其他什么人吃的东西' }
       ] 
   }
})
