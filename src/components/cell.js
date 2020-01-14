import React from 'react'
import Modal from './modal'
import { createEvent } from '../actions/actions'
import { connect } from 'react-redux'

class Cell extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            modal: ''
        }
        if (this.props.cell.text !== '') {
            this.event = <div className="event">
                <div className="event-desc">
                    {this.props.cell.text}
                </div>
                <div className="event-time">
                    6:00pm to 8:30pm
                </div>
            </div>
        } else {
            this.event = ''
        }
    }

    getClass = () => {
        if (this.props.month !== this.props.cell.date.getMonth()) {
            return 'day other-month'
        } else {
            return 'day'
        }
    }

    showModal = () => {
        this.setState({ modal: <Modal hideModal={this.hideModal}/> })
        console.log(this.state.modal)
    }

    hideModal = () => {
        this.setState({ modal: '' })
        console.log(this.state.modal)
    }

    render () {
        return (
            <td className={this.getClass()} onClick={this.showModal}>
                <div className="date">{this.props.cell.date.getDate()}</div>
                {this.event}
                {this.state.modal}
            </td>
        )
    }
}

const mapStateToProps = store => {
    return {
        events: store.events
    }
}

export default connect(mapStateToProps)(Cell)
