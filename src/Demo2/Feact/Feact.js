function createElement(tag, props, ...children) {
    if (typeof tag === 'function') {
        if (!tag.prototype.render) {
            throw new Error(`class ${tag.name} has not a render method!`)
        }

        const instance = new tag()

        instance.componentWillMount && instance.componentWillMount()

        const vnode = instance.render()

        return Object.assign({}, vnode, { type: 'FeactComponent', instance })
    }

    return {
        type: 'FeactElement',
        tag,
        props,
        children
    }
}

class Component {
    setState() {}
}

export default {
    createElement,
    Component
}
