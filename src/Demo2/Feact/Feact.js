import omit from 'lodash/omit'
import flattenDeep from 'lodash/flattenDeep'

function createElement(tag, attrs, ...children) {
    return {
        type: 'FeactElement',
        tag,
        attrs,
        children: flattenDeep(children)
    }
}

class Component {
    constructor(props = {}) {
        this.props = props
        this.state = {}
    }
    setState(newState) {
        Object.assign(this.state, newState)
    }
}

export default {
    createElement,
    Component
}
