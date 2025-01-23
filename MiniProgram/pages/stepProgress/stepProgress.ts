Page({
    data: {
        steps: [
            {
                label: '认证提交',
                timestamp: '2024-03-20 10:00',
            },
            {
                label: '认证审核',
                timestamp: '2024-03-21 10:32',
            },
            {
                label: '投资测算',
                timestamp: '2024-03-22 15:23',
            },
        ]
    },

    onStepItemClick(e: TouchEventType) {
        const { index, item } = e.detail

        console.log(`点击了第${index + 1}个`, JSON.stringify(item));
    }
});
