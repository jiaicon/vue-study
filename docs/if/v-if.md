### # v-if<a id="v-if"></a>
------
?> v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。
```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 v-else 添加一个“else 块”：  
```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

#### # 在`<template>`元素上使用 v-if 条件渲染分组<a id="tempalte"></a>

使用发放：

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```
#### # v-else<a id="v-else"></a>

配合 `if` 或者 `v-else-if` 使用
```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

#### # v-else-if<a id="v-else-if"></a>

> 2.1.0 新增

配合`v-if`使用，类似`else if`，可连续使用：
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

#### # 用`key`管理可复用的元素<a id="key"></a>

!> 在React和Vue中，使用key可以增加虚拟DOM的Diff算法效率。当然还有其他原因。

例如：  
用户切换登录方式，由于没有key，会导致非受控组件的内容不会清空: 
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```
> <div id="app-1">
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
  </template><br>
  <button @click="onClick">切换</button>
  <p>输入内容后，点击切换，内容不清空</p>
</div>

添加key：

```html
<div id="app-2">
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email">
  </template><br>
</div>
```

> <div id="app-2">
  <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email">
  </template><br>
  <button @click="onClick">切换</button>
  <p>设置了key，点击内容会清空</p>
</div>

> [例子地址](https://github.com/jiaicon/vue-study/blob/develop/basic/key的使用.html)

<script>
new Vue({
  el: '#app-1',
  data: {
    loginType: 'username',
  },
  methods: {
    onClick: function() {
      console.log(this.loginType);
      this.loginType=this.loginType==='username' ? 'email' : 'username';
    }
  }
});
new Vue({
  el: '#app-2',
  data: {
    loginType: 'username',
  },
  methods: {
    onClick: function() {
      console.log(this.loginType);
      this.loginType=this.loginType==='username' ? 'email' : 'username';
    }
  }
});
</script>

