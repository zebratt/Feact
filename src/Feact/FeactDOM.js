class FeactDOM {
    createRealNode(element) {
        const node = document.createElement(element.tag)

        if (element.attrs) {
            Object.keys(element.attrs).map(key => {
                const attrKey = key === 'className' ? 'class' : key
                const value = element.attrs[key]

                node.setAttribute(attrKey, value)
            })
        }

        if (element.children && element.children.length) {
            for (let i = 0; i < element.children.length; i++) {
                let nextNode = null

                if(typeof element.children[i] === 'string'){
                    nextNode = document.createElement('span')
                    nextNode.innerText = element.children[i]
                }else{
                    nextNode = this.createRealNode(element.children[i])
                }

                node.appendChild(nextNode)
            }
        }

        return node
    }
    render(element, container) {
        if (!element) {
            throw new Error('element can not be empty!')
        }

        if (!container) {
            throw new Error('container can not be empty')
        }

        container.appendChild(this.createRealNode(element))
    }
}

export default new FeactDOM()
