function MixinUtil(...args) {
  // 调用函数返回装饰器实际应用的函数
  return function (constructor) {
    for (let arg of args) {
      for (let key of Object.getOwnPropertyNames(arg.prototype)) {
        if (key === 'constructor') continue;
        Object.defineProperty(constructor.prototype, key, Object.getOwnPropertyDescriptor(arg.prototype, key))
      }
    }
  }
}

export {
  MixinUtil,
}
