import React from 'react'
import Header from './components/header'
import Body from './components/body'
import './stylesheets/large.css'

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <Header/>
                <Body/>
            </div>
        )
    }
}

export default App
