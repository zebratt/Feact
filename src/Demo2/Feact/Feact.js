import omit from 'lodash/omit'
import flattenDeep from 'lodash/flattenDeep'
import FeactDOM from './FeactDOM'

function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children: flattenDeep(children)
    }
}

class Component {
    constructor(props = {}) {
        this.props = props
        this.state = {}
        this.stateQueue = []
    }
    setState(newState) {
        // Object.assign(this.state, newState)
        // FeactDOM.flush(this)
        // this.stateQueue.push(newState)
    }
    enqueueState(newState) {
        
    }
}

export default {
    createElement,
    Component
}
