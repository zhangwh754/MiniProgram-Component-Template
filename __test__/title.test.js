const path = require('path')
const simulate = require('miniprogram-simulate')


function sleep() {
    // 返回一个 Promise，等待 5 秒
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 300);
    });
}

test('Title Component render', async () => {
    const title = '你好世界'
    const id = simulate.load(path.join(process.cwd(), './dist/components/MTitle/index')) // 加载自定义组件，返回组件 id
    const container = simulate.render(id, { title }) // 使用 id 渲染自定义组件，返回组件封装实例

    container.attach(document.createElement('parent-wrapper'))

    expect(container.toJSON()).toMatchSnapshot('initial')

    await sleep()
    container.setData({ title: 'Hello World' })
    expect(container.toJSON()).toMatchSnapshot('updated');
})
