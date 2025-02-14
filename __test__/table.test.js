const path = require('path')
const simulate = require('miniprogram-simulate')


describe('table', () => {
    const table = simulate.load(path.join(process.cwd(), './dist/components/MTable/index')) // 加载自定义组件，返回组件 id

    test('基础表格渲染', async () => {
        const bindHeaderClick = jest.fn(function () {
            console.log('bindHeaderClick');
        })
        const bindAction = jest.fn(function (data) {
            const { dataSource } = this.data
            const { action, index: dIndex, key } = data.detail

            if (action == 'delete') {
                this.setData({
                    dataSource: dataSource.filter((item, index) => index != dIndex)
                })
            } else if (action == 'edit') {
                this.setData({
                    dataSource: dataSource.map((item, index) => {
                        if (index == dIndex) return { name: '罗伯特', age: 30, sex: '男' }

                        return item
                    })
                })
            }
        })

        const wrapper = simulate.render(simulate.load({
            usingComponents: { 'MTable': table },
            template: `<MTable id="m-table" columns="{{columns}}" columnKey="key" columnLabel="title" dataSource="{{dataSource}}" bind:headerClick="bindHeaderClick" bind:action="bindAction"></MTable>`,
            data: {
                columns: [
                    {
                        title: "姓名",
                        key: "name",
                        width: 300,
                    },
                    {
                        title: "年龄",
                        key: "age",
                        width: 200,
                    },
                    {
                        title: "性别",
                        key: "sex",
                        width: 200,
                    },
                    {
                        title: "操作",
                        key: "action",
                        width: 300,
                        type: "action",
                        actions: [
                            {
                                name: "edit",
                                text: "编辑",
                                className: "edit-btn",
                            },
                            {
                                name: "delete",
                                text: "删除",
                                className: "delete-btn",
                            },
                        ],
                    },
                ],
                dataSource: [
                    {
                        name: "张三",
                        age: 18,
                        sex: "男",
                    },
                    {
                        name: "李四",
                        age: 20,
                        sex: "女",
                    },
                    {
                        name: "王五",
                        age: 25,
                        sex: "男",
                    },
                ]
            },
            methods: {
                bindHeaderClick,
                bindAction
            }
        })) // 使用 id 渲染自定义组件，返回组件封装实例

        wrapper.attach(document.createElement('parent-wrapper'))

        expect(wrapper.toJSON()).toMatchSnapshot('基础表格')

        const mTable = wrapper.querySelector('#m-table')


        mTable.dispatchEvent('action', { detail: { action: 'delete', index: 0 } })
        await simulate.sleep(0)
        mTable.dispatchEvent('action', { detail: { action: 'delete', index: 1 } })
        await simulate.sleep(0)
        mTable.dispatchEvent('action', { detail: { action: 'edit', index: 0 } })

        expect(bindAction).toBeCalledTimes(2)
        await simulate.sleep(0)

        expect(wrapper.toJSON()).toMatchSnapshot('数据变化后的基础表格')


    })

    test('表格中的动态插槽列渲染', async () => {
        const onSlotButtonClick = jest.fn(function (e) {
            const { index } = e.currentTarget.dataset;

            console.log(`index${index}被点击了`);
        })

        const wrapper = simulate.render(simulate.load({
            usingComponents: {
                'MTable': table,
            },
            template: `
            <MTable scroll="{{false}}" columns="{{columns}}" columnKey="key" columnLabel="title" dataSource="{{data}}" bind:action="bindAction">
                <view wx:for="{{data}}" wx:key="index" slot="button-slot-{{index}}">
                    <button
                        class="button {{index == 1 && 'blue'}}"
                        data-index="{{index}}"
                        bind:tap="onSlotButtonClick"
                    >
                        测试按钮{{index + 1}}
                    </button>
                </view>
            </MTable>
        `,
            data: {
                columns: [
                    {
                        title: "姓名",
                        key: "name",
                        width: 300,
                    },
                    {
                        title: "年龄",
                        key: "age",
                        width: 200,
                    },
                    {
                        title: "性别",
                        key: "sex",
                        width: 200,
                    },
                    {
                        title: "自定义渲染",
                        width: 500,
                        slot: "button-slot",
                    },
                ],
                data: [
                    {
                        name: "张三",
                        age: 18,
                        sex: "男",
                    },
                    {
                        name: "李四",
                        age: 20,
                        sex: "女",
                    },
                    {
                        name: "王五",
                        age: 25,
                        sex: "男",
                    },
                ]
            },
            methods: {
                onSlotButtonClick
            }
        }))

        wrapper.attach(document.createElement('parent-wrapper'))

        expect(wrapper.toJSON()).toMatchSnapshot('渲染的插槽表格')

        // Test slot button click
        const button = wrapper.querySelector('.button')
        button.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(onSlotButtonClick).toBeCalled()

        // Test blue button class on second row
        const blueButton = wrapper.querySelector('.blue')
        expect(blueButton).toBeTruthy()
    })
})
