### # 文本<a id="文本"></a>

> 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

`<span>{{message}}</span>`

`v-once指令`数据只会在页面创建的时候插入一次，update时不再改变
```html
<!-- 
  Vue 会`响应式`刷新
  每当数据更新，Mustache中的变量都会更新。
  可以通过v-once指令，实现只插入一次。
-->
<span v-once>{{message}}</span>
```

### # HTML<a id="文本"></a>

> 默认情况下Mustache会将HTML渲染成文本，为了渲染真的HTML，需要使用`v-html指令`

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

> <div id="app-1">
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
  
### # Attribute<a id="Attribute"></a>

Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 `v-bind` 指令：  
> 即不能这么使用：  
`<span id="{{id}}"></span>`
> 遇到这种情况要使用指令
> `<span v-bind:id="id"></span>`

对于布尔 attribute (它们只要存在就意味着值为 `true`)，`v-bind` 工作起来略有不同，在这个例子中：
`<button v-bind:disabled="isButtonDisabled"></button>`

> <div id="app-2">
    <button v-bind:disabled="isButtonDisabled1">不能使用</button>
    <button v-bind:disabled="isButtonDisabled2">可以使用</button>
  </div>  

### # 使用JavaScript表达式<a id="使用JavaScript表达式"></a>

> `JavaScript`原生的一些方法

例如：
```html
{{number + 1}}
{{ok ? 'yes' : 'no'}}
{{message.split('').reverse.join('')}}
<div v-bind:id="'list-' + id"></div>
```

> <div id="app-3">
    <p>number: {{number}}</p>
    <p>number + 1: {{number + 1}}</p>
    <p>ok: {{ok}}</p>
    <p>ok: {{ok ? 'yes' : 'no'}}</p>
    <p>message: {{message}}</p>
    <p>message reverse: {{message.split('').reverse().join('')}}</p>
  </div>

每个绑定的表达式必须是单个表达式，所以一些不会被解析。
```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

<script>
  new Vue({
    el: '#app-1',
    data: {
      rawHtml: '<span>测试插入原生HTML</span>'
    }
  });
  new Vue({
    el: '#app-2',
    data: {
      isButtonDisabled1: true,
      isButtonDisabled2: false,
    }
  });
  new Vue({
    el: '#app-3',
    data: {
      number: 2,
      ok: true,
      message: 'this is some text!!!',
    }
  });
</script>
