interface TouchEventType extends WechatMiniprogram.TouchEvent {
  currentTarget: {
    dataset: {
      [key: string]: any;
    };
  };
}
