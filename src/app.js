import React from 'react'
import Header from './components/header'
import Table from './components/table'
import { Provider } from 'react-redux'
import store from './store/store'
import './stylesheets/app.css'

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Table/>
                </div>
            </Provider>
        )
    }
}

export default App
