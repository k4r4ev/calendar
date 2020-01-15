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
            if (this.props.event.length !== 0) {
                return <div className="event">
                    <div className="event-desc">
                        {this.props.event[0].text}
                    </div>
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

    showModal = () => {
        this.setState({ modal: <Modal hide={this.hideModal} date={this.props.cell.date} set={this.setEvent}/> })
    }

    hideModal = () => {
        this.setState({ modal: '' })
    }

    render () {
        return (
            <td className={this.getClass()}>
                <div className="date" onClick={this.showModal}>{this.props.cell.date.getDate()}</div>
                {this.state.event}
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
