## 注册Vue插件有两种形式
`Vue.use`接收两种类型的参数，可以是`Object`，也可以是`Function`，当接收的参数是个对象的时候，`Vue`会调用`install`方法，当接收的参数是个方法的时候，就会直接调用该方法

## Object类型
```javascript
{
  install (Vue) {
    if (!Vue) return false
    ...
  }
}
```

## Function类型
```javascript
function register (Vue) {
  if (!Vue || register.installed) return false
  ...
}
```