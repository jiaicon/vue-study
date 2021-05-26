### 简单的指令

#### 处理用户输入
##### v-on
> 使用`v-on`在HTML中绑定事件，在实例中定义方法

下面是一个翻转文本的例子
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>
```
```javascript
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
> <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转消息</button>
  </div>
##### v-modal

> 使用`v-model`，可以实现双向绑定数据

```html
<div id="app-6">
  <p>{{ input }}</p>
  <input v-model="input">
</div>
```
```javascript
var app6 = new Vue({
  el: '#app-6',
  data: {
    input: 'Hello Vue!'
  }
})
```
> <div id="app-6">
    <p>{{ input }}</p>
    <input v-model="input">
  </div>

<script>
  new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!',
      input: '这里是输入的内容'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
    }
  });
  new Vue({
      el: '#app-6',
      data: {
        input: '这里是输入的内容'
      },
    });
</script>
