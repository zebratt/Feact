import flattenDeep from 'lodash/flattenDeep'
import omit from 'lodash/omit'

function createElement(tag, attrs, ...children) {
    if (typeof tag === 'function') {
        if (!tag.prototype.render) {
            throw new Error(`class ${tag.name} has not a render method!`)
        }

        const instance = new tag()
        
        instance.componentWillMount && instance.componentWillMount()

        instance.props.children = children
        Object.assign(instance.props, omit(attrs, ['className', 'children']))

        return Object.assign({}, instance.render(), { type: 'FeactComponent', instance })
    }

    return {
        type: 'FeactElement',
        tag,
        attrs,
        children: flattenDeep(children)
    }
}

class Component {
    constructor(){
        this.props = {}
    }
    setState(newState) {
        this.state = newState
    }
}

export default {
    createElement,
    Component
}
