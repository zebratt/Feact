import Feact from './Feact'

function setAttributes(key, attrs, targetNode) {
    if (key === 'className') {
        targetNode.setAttribute('class', attrs['className'])
    } else if (/^on\w+/.test(key)) {
        targetNode[key.toLowerCase()] = attrs[key]
    } else {
        targetNode.setAttribute(key, attrs[key])
    }
}

function renderComponent(component) {
    if(!component.dom && component.componentWillMount){
        component.componentWillMount()
    }

    const dom = _render(component.render())

    if(component.dom && component.dom.parentNode){
        component.dom.parentNode.replaceChild( dom, component.dom );
    }

    if(!component.dom && component.componentDidMount){
        component.componentDidMount()
    }

    component.dom = dom

    return dom
}

function createComponent(Component, props) {
    let instance = null

    // class写法的Component
    if (Component.prototype.render) {
        instance = new Component(props)
    } else {
        // 纯函数写法的Component
        instance = new Feact.Component(props)
        instance.render = Component
    }

    return renderComponent(instance)
}

function _render(vnode) {
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return document.createTextNode(vnode)
    } else if (typeof vnode === 'object' && typeof vnode.tag === 'function') {
        return createComponent(vnode.tag, Object.assign({}, vnode.attrs, { children: vnode.children }))
    } else if (typeof vnode === 'object' && typeof vnode.tag === 'string') {
        const node = document.createElement(vnode.tag)

        if (vnode.attrs) {
            Object.keys(vnode.attrs).forEach(key => {
                setAttributes(key, vnode.attrs, node)
            })
        }

        if (vnode.children && vnode.children.length) {
            vnode.children.forEach(c => {
                render(c, node)
            })
        }

        return node
    } else {
        throw new Error(`Can not handle vnode type: ${typeof vnode}`)
    }
}

function render(vnode, container) {
    container.appendChild(_render(vnode))
}

function flush(component){
    renderComponent(component)
}

export default {
    render,
    flush
}
