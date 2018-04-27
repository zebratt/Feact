function createChildren(targetNode, vnode) {
    const { children, instance } = vnode

    for (let i = 0; i < children.length; i++) {
        let nextNode = null

        switch (typeof children[i]) {
            case 'object':
                nextNode = createRealNode(children[i])
                break
            default:
                nextNode = document.createTextNode(children[i])
                break
        }

        targetNode.appendChild(nextNode)
    }
}

function createRealNode(vnode) {
    const node = document.createElement(vnode.tag)

    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            setAttribute(key, vnode.attrs, node)
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

function setAttribute(key, attrs, targetNode) {
    if (key === 'className') {
        targetNode.setAttribute('class', attrs['className'])
    } else if (/^on\w+/.test(key)) {
        targetNode[key.toLowerCase()] = attrs[key]
    } else {
        targetNode.setAttribute(key, attrs[key])
    }
}

let _vnode = null
let _container = null

function render(vnode, container) {
    if (!vnode && !_vnode) {
        throw new Error('vnode can not be empty!')
    }

    if (!container && !_container) {
        throw new Error('container can not be empty')
    }

    if (_vnode && _container) {
        _container.innerHTML = ''
        _container.appendChild(createRealNode(_vnode))
    } else {
        _vnode = vnode
        _container = container

        container.innerHTML = ''
        container.appendChild(createRealNode(vnode))
    }
}

export default {
    render
}
