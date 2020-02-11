import React from 'react'
import Header from './header'
import Table from './table'

class Body extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Table/>
            </div>
        )
    }
}

export default Body
