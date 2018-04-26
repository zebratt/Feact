import flattenDeep from 'lodash/flattenDeep'

class Feact {
    createElement(tag, props, ...children) {
        if (typeof tag === 'function') {
            return tag(Object.assign({}, props, { children }))
        }

        return {
            tag,
            props: Object.assign({}, props, { children: flattenDeep(children) })
        }
    }
}

export default new Feact()
