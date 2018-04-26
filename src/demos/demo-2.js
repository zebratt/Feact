import Feact from '../Feact/Feact'
import FeactDOM from '../Feact/FeactDOM'

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
