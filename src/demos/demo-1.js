import Feact from '../Feact/Feact'
import FeactDOM from '../Feact/FeactDOM'

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