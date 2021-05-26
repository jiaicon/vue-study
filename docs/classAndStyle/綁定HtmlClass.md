## # 绑定 HTML Class<a id="绑定HTMLClass"></a>
--------------
!> 动态改变 class 和 style 属性

#### # 对象语法<a id="对象语法"></a>

通过`v-bind:class`动态改变class属性
`<div v-bind:class="{active: isActive}">动态改变class属性</div>`
事例：
> [动态改变class](https://github.com/jiaicon/vue-study/blob/develop/basic/动态改变class.html)

!> 可以传入多个`class`属性，且与普通的可以共存。

```<div class="class1" v-bind:class="{class2: show2, class3: show3}">多个class</div>```
当然，也可以传入`计算属性`。

```html
<div v-bind:class="computeClass">计算属性class</div>
```

> <div id="app-2">
    <div class="static" :class="computeClass">计算属性class</div>
    点击切换类名：<input type="checkbox" @change="change">
</div>


### # 数组语法<a id="数组语法"></a>
可以传递数组给`v-bind:class`。  
语法: 
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
```javascript
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
渲染为:   
```html
<div class="active text-danger"></div>
```  
可以使用三元运算符动态切换class:     
```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```  
数组对象结合使用：  
```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

### # 用在组件上<a id="用在组件上"></a>

!> 使用组件时，新添加的`class`类名会直接添加在组件的跟元素上。

比如一个组件是：  
```javascript
Vue.component('my-component', {
  template: '<p class="foo bar">组件添加class</p>'
});
```
在使用时添加两个类名`class1 class2`，  
```html
<my-component class="class1 class2"></my-component>
```

最终解析为：
```html
<p class="foo bar class1 class2">组件添加class</p>
```

!> 当然，动态绑定也是可以的

```html
<my-component :class="[{class2: isActive}, 'class3']"></my-component>
```

> [例子](https://github.com/jiaicon/vue-study/blob/develop/basic/组件动态改变类名.html)

<script>
new Vue({
    el: '#app-2',
    data: {
        active: false,
    },
    computed: {
        computeClass: function() {
        console.log(this.active);
          return {
            active: this.active,
          };
        }
    },
    methods: {
        change: function() {
          this.active = !this.active;
        }
    }
});
</script>
