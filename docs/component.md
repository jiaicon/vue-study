### 组件化应用

> 正式开发中，几乎都是使用组件进行开发。可以通过一个个小的组件，组装、复用形成大的项目

下面是一个组件树  
![组件树](./assert/imgs/components.png '组件树')

Vue中，组件实际就是一个个Vue实例
```javascript
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  props: [ 'todo' ], // props：传入组件的数据，
  template: '<li>这是个待办项</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    data: [],
  }
})
```
使用：
```html
<!--  通过`v-bind:props`传递props-->
<div id="app">
    <ol>
      <!-- 创建一个 todo-item 组件的实例 -->
      <todo-item 
        v-for="item in data"
        v-bind:key="item.id"
        v-bind:todo="item"
      ></todo-item>
    </ol>
</div>
```
> 事例地址: [Vue组件开发事例](https://github.com/jiaicon/vue-study/blob/master/basic/组件化应用构建.html)
  
<script>
  
</script>
