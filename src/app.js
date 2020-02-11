import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import './stylesheets/app.css'
import Body from './components/body'

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Route exact path="/month" component={Body}/>
                    <Redirect to="/month"/>
                </Provider>
            </BrowserRouter>
        )
    }
}

export default App
