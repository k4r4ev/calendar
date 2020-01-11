import React from 'react'
import Header from './components/header'
import Table from './components/table'
import './stylesheets/app.css'

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <Header/>
                <Table/>
            </div>
        )
    }
}

export default App
