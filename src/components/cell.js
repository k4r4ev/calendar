import React from 'react'
import Modal from './modal'

class Cell extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            modal: ''
        }
    }

    getEvent = () => {
        if (this.props.event === '') {
            return ''
        } else {
            return <div className="event">
                {this.props.event}
            </div>
        }
    }

    getClass = () => {
        if (this.props.month !== this.props.cell.date.getMonth()) {
            return 'day other-month'
        } else {
            return 'day'
        }
    }

    updateOrCreate = () => {
        if (this.props.event === '') {
            return 0
        } else {
            return 1
        }
    }

    showModal = () => {
        this.setState({
            modal: <Modal hide={this.hideModal} date={this.props.cell.date} update={this.updateOrCreate()}/>
        })
    }

    hideModal = () => {
        this.setState({ modal: '' })
    }

    render () {
        return (
            <td className={this.getClass()}>
                <div className="date" onClick={this.showModal}>{this.props.cell.date.getDate()}</div>
                {this.getEvent()}
                {this.state.modal}
            </td>
        )
    }
}

export default Cell
