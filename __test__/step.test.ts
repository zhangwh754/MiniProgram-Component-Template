const path = require('path')
const simulate = require('miniprogram-simulate')

describe('MStepProgress', () => {
    const Step = simulate.load(path.join(process.cwd(), './dist/components/MStepProgress/index'))

    test('renders basic step progress with default props', async () => {
        const wrapper = simulate.render(simulate.load({
            usingComponents: { 'MStepProgress': Step },
            template: `<MStepProgress steps="{{steps}}" />`,
            data: {
                steps: [
                    { label: 'Step 1', timestamp: '2024-03-20 10:00' },
                    { label: 'Step 2', timestamp: '2024-03-21 10:00' },
                    { label: 'Step 3', timestamp: '2024-03-22 10:00' }
                ]
            }
        }))

        wrapper.attach(document.createElement('parent-wrapper'))
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('renders with custom colors', async () => {
        const wrapper = simulate.render(simulate.load({
            usingComponents: { 'MStepProgress': Step },
            template: `<MStepProgress 
                steps="{{steps}}" 
                primaryColor="{{primaryColor}}"
                secondColor="{{secondColor}}"
            />`,
            data: {
                steps: [
                    { label: 'Step 1', timestamp: '2024-03-20 10:00' },
                    { label: 'Step 2', timestamp: '2024-03-21 10:00' }
                ],
                primaryColor: '#ff0000',
                secondColor: '#dddddd'
            }
        }))

        wrapper.attach(document.createElement('parent-wrapper'))
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('renders with active index and useIndex', async () => {
        const wrapper = simulate.render(simulate.load({
            usingComponents: { 'MStepProgress': Step },
            template: `<MStepProgress 
                steps="{{steps}}" 
                activeIndex="{{activeIndex}}"
                useIndex="{{useIndex}}"
            />`,
            data: {
                steps: [
                    { label: 'Step 1', timestamp: '2024-03-20 10:00' },
                    { label: 'Step 2', timestamp: '2024-03-21 10:00' },
                    { label: 'Step 3', timestamp: '2024-03-22 10:00' }
                ],
                activeIndex: 1,
                useIndex: true
            }
        }))

        wrapper.attach(document.createElement('parent-wrapper'))
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})