import flattenDeep from 'lodash/flattenDeep'

class Feact {
    createElement(tag, props, ...children) {
        if (typeof tag === 'function' ) {
            // 如果有render方法，则将其视为组件，否则视为纯函数
            // TODO: check一下其他库这里是如何判断的
            if(tag.prototype.render){
                const instance = new tag()

                return instance.render()
            }else{
                return tag(Object.assign({}, props, { children }))
            }
        }

        return {
            type: 'FeactVisualDom',
            tag,
            props: Object.assign({}, props, { children: flattenDeep(children) })
        }
    }
}

export default new Feact()
