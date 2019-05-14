function myVue(options) {
  this._init(options)
}

myVue.prototype._init = function (options){
  this.$options = options;    // options 为上面使用时传入的结构体，包括el,data,methods
  this.$el = document.querySelector(options.el)
  this.$data = options.data
  this.$methods = options.methods
}

