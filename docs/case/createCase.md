### 创建Vue实例

> Vue 没有遵循`MVVM模型`
> 一个Vue应用，由一个通过`new Vue`创建的根Vue实例，以及可选的、嵌套的、可复用的组件树组成。

例如：一个待办的应用：
```
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ TodoButtonDelete
   │  └─ TodoButtonEdit
   └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```
新建Vue实例
```javascript
new Vue({

})
```
