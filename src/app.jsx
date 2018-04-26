import Feact from './Feact/Feact'
import FeactDOM from './Feact/FeactDOM'

const Header = (attrs, children) => {
    return (
        <div className="header">
            <div>this is header</div>
            {...children}
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