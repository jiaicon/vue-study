### #v-show<a id="v-show"></a>
--------

`v-show`可根据条件隐藏或展示元素

```html
<h1 v-show="ok">Hello!</h1>
```

注意：

!> 1. `v-show`只是隐藏DOM，DOM仍存在，只是改变了`display`属性，不会占有位置。  
   2. `v-show`不支持`<template>`元素。  
   3. `v-show`没有`v-else`之类的条件语句。  
