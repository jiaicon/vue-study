### # 指令<a id="指令"></a>
指令 (Directives) 是带有 `v-` 前缀的特殊 `attribute`。  
指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。  
指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。  

### # 参数<a id="参数"></a>
一些指令能够接收一个“参数”，在指令名称之后以冒号表示。  
例如，v-bind 指令可以用于响应式地更新 HTML attribute：

`<a v-bind:href="url">...</a>`

在这里 href 是参数，告知 v-bind 指令将该元素的 href attribute 与表达式 url 的值绑定。

另一个例子是 v-on 指令，它用于监听 DOM 事件：

`<a v-on:click="doSomething">...</a>`

在这里参数是监听的事件名。我们也会更详细地讨论事件处理。

### # 动态参数<a id="动态参数"></a>
从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：
```html
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。  
例如，如果你的 Vue 实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href。

> [example](https://github.com/jiaicon/vue-study/blob/develop/basic/动态参数.html)

### # 修饰符<a id="修饰符"></a>

修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

`<form v-on:submit.prevent="onSubmit">...</form>`
  
<script>
  new Vue({
    el: '#app-3',
    data: {
      attributeName: 'href',
      url: 'https://www.baidu.com',
    }
  });
</script>
