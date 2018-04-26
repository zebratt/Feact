import Feact from '../Feact/Feact'
import FeactDOM from '../Feact/FeactDOM'

// demo-1
// 实现最基本的功能，虚拟dom到真实dom的转换，这里不涉及dom变化
const Header = (props) => {
    return (
        <div className="header">
            <div>this is header component</div>
            {props.children}
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <Header>
                <div>custom header text</div>
            </Header>
            <div>this is App</div>
        </div>
    )
}

FeactDOM.render(<App />, document.getElementById('root'))