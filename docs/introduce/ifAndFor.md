### 条件与循环

#### 条件渲染
> 控制切换一个元素是否显示也相当简单：使用`v-if`来控制
```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```
```javascript
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

> 点击控制显示隐藏  

注意：下面例子中的`transition`是创建过渡动画，需要在`css`中写动画效果
```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```
```html
<div id="app">
  <button v-on:click="changeShow">点击</button>
  <transition name="fade">
    <div v-if="show">条件渲染</div>
  </transition>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    show: true,
  },
  watch: {
    show: function () {
      console.log(this.show)
    }
  },
  methods: {
    changeShow: function () {
      // 这里不能使用箭头函数
      this.show=!this.show;
    }
  }
})
```
----------------------------------------

#### 循环渲染
> 使用`v-for`指令可以绑定数组的数据来渲染。

```html
<div id="app">
  <div v-for="item in data">
    {{item.name}}
  </div>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    data: [
      {id: 1, name: 1111},
      {id: 2, name: 2222},
      {id: 3, name: 3333},
      {id: 4, name: 4444},
    ],
  },
})
```
