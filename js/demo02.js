// 每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例启动的： 

// var vm = new Vue({
//   // 选项
// })


// // 在实例化对象的时候，需要传入一个选项对象，它包括数据，模板，挂载元素，方法，生命周期钩子等选项。

// // 可以扩展 Vue 构造器，从而用预定义选项创建可复用的组件构造器：


// var MyComponent=Vue.extend({
//     data:function () {
//         return {
//             message:'123'
//         }
//     }
// })


// var myComponentInstance= new MyComponent()
// console.log(myComponentInstance._data)


// 属性和方法
// 每个vue实例都会代理其data对象所有的属性：
// var data={a:1};
// var vm=new Vue({
//     data:data
// })
// // 设置data的属性a的值
// // 可以同时响应改变vm的a
// data.a=2;
// console.log(vm.a)
// // 设置vm的属性a的值
// // 可以同时响应改变data的a
// vm.a=3;
// console.log(data.a)


// 除了data属性，VUE实例暴漏了一些有用的实例属性与方法。这些属性和方法都有前缀$,以便与代理的data属性区分

// var data = { a: 0 };
// var vm = new Vue({
//     el: '#vue1',
//     data: data,
//     methods: {
//         cli: function(event) {
//             console.log(this.a);
//             if (this.a < 10) this.a++;
//         }
//     }
// })

// console.log(vm.$data,data);
// console.log(vm.$data.get);

// console.log(vm.$el,document.getElementById('vue1'))

// vm.$watch('a',function (newVal,oldVal) {
//    console.log(newVal,oldVal)
// })



// 每个实例在创建之前都要经过一系列的初始化过程。例如，实例需要配置数据观测(data observer)、编译模版、挂载实例到 DOM ，然后在数据变化时更新 DOM 。在这个过程中，实例也会调用一些 生命周期钩子 ，这就给我们提供了执行自定义逻辑的机会。例如，created 这个钩子在实例被创建之后被调用：
// 也有一些其它的钩子，在实例生命周期的不同阶段调用，如 mounted、 updated 、destroyed 。钩子的 this 指向调用它的 Vue 实例。一些用户可能会问 Vue.js 是否有“控制器”的概念？答案是，没有。组件的自定义逻辑可以分布在这些钩子中。