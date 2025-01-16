const path = require('path')
const simulate = require('miniprogram-simulate')

test('Title Component render', async () => {
    const title = '你好世界'
    const id = simulate.load(path.join(process.cwd(), './dist/components/MTitle/index')) // 加载自定义组件，返回组件 id
    const container = simulate.render(id, { title }) // 使用 id 渲染自定义组件，返回组件封装实例

    container.attach(document.createElement('parent-wrapper'))

    expect(container.toJSON()).toMatchSnapshot('initial')

    await simulate.sleep(0)
    container.setData({ title: 'Hello World' })
    expect(container.toJSON()).toMatchSnapshot('updated');
})
