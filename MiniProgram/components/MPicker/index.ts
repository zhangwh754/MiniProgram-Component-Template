Component({
  options: {
    addGlobalClass: true, // 启用组件样式共享
  },

  properties: {
    desc: {
      type: String
    },
    value: {
      type: String,
      optionalTypes: [Number]
    },
  },
});
