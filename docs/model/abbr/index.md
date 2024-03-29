### # 缩写<a id="缩写"></a>

`v-` 前缀作为一种视觉提示，用来识别模板中 `Vue` 特定的 `attribute`。当你在使用 `Vue.js` 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 `Vue` 管理所有模板的单页面应用程序 (SPA - single page application) 时，`v-` 前缀也变得没那么重要了。因此，`Vue` 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

### # v-bind缩写<a id="v-bind缩写"></a>

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

### # v-on缩写<a id="v-on缩写"></a>

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```
