import Feact from './Feact/Feact'
import FeactDOM from './Feact/FeactDOM'

// demo-2
// 这里实现一个组件的基本生命周期 

class App {
    componentWillReceiveProps() {
        console.log('App will reveice props')
    }
    componentWillUpdate() {
        console.log('App will update')
    }
    componentDidUpdate() {
        console.log('App did update')
    }
    componentWillMount() {
        console.log('App will mount')
    }
    componentDidMount() {
        console.log('App did mount')
    }
    render() {
        return <div className="app">this is app</div>
    }
}

FeactDOM.render(<App />, document.getElementById('root'))
