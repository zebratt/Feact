/**
 * componentWillMount 的执行时机是什么？在组件render方法之前执行
 */
function createChildren(targetNode, vnode) {
    const { children, instance } = vnode

    for (let i = 0; i < children.length; i++) {
        let nextNode = null

        switch (typeof children[i]) {
            case 'string':
                nextNode = document.createTextNode(children[i])
                break
            default:
                nextNode = createRealNode(children[i])
                break
        }

        targetNode.appendChild(nextNode)
    }
}

function createRealNode(vnode) {
    const node = document.createElement(vnode.tag)

    if (vnode.props) {
        Object.keys(vnode.props).forEach(key => {
            switch (key) {
                case 'className':
                    node.setAttribute('class', vnode.props['className'])
                    break
                default:
                    node.setAttribute(key, value)
                    break
            }
        })
    }

    if (vnode.children && vnode.children.length) {
        createChildren(node, vnode)
    }

    if (vnode.instance) {
        vnode.instance.componentDidMount && vnode.instance.componentDidMount()
    }

    return node
}

function render(vnode, container) {
    if (!vnode) {
        throw new Error('vnode can not be empty!')
    }

    if (!container) {
        throw new Error('container can not be empty')
    }

    container.innerHTML = ''
    container.appendChild(createRealNode(vnode))
}

export default {
    render
}
