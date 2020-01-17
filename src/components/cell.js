import React from 'react'
import Modal from './modal'
import { connect } from 'react-redux'

class Cell extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            modal: '',
            event: this.getEvent()
        }
    }

    getEvent = () => {
        let event = (this.props.events.filter(
            (event) => new Date(JSON.parse(event.date)).toDateString() === this.props.cell.date.toDateString()))
        console.log(event)
        if (event.length === 0) {
            return ''
        } else {
            return event[0]
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
        this.setState({ modal: <Modal hide={this.hideModal} date={this.props.cell.date}/> })
    }

    hideModal = () => {
        this.setState({ modal: '' })
    }

    render () {
        return (
            <td className={this.getClass()}>
                <div className="date" onClick={this.showModal}>{this.props.cell.date.getDate()}</div>
                {this.props.events[this.props.events.length].text}
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
