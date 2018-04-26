class Feact {
    createElement(tag, attrs, ...children){
        if(typeof tag === 'function'){
            return tag(attrs, ...children)
        }

        return {
            tag,
            attrs,
            children
        }
    }
}

export default new Feact()