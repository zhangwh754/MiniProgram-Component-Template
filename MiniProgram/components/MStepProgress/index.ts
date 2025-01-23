Component({
  options: {
    addGlobalClass: true, // 启用组件样式共享
  },

  properties: {
    steps: {
      type: Array,
      value: [],
    },
    activeStep: {
      type: Number,
      value: 0,
    },
    direction: {
      type: String,
      value: 'horizontal',
    },
    primaryColor: {
      type: String,
      value: '#1677FF'
    },
    secondColor: {
      type: String,
      value: '#ccc'
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    useIndex: {
      type: Boolean,
    },
  },

  data: {
  },

  methods: {
    onStepItemClick(e: TouchEventType) {
      const { index, item } = e.currentTarget.dataset

      this.triggerEvent('stepItemClick', { index, item })
    },
  }
});
