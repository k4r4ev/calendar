import React from 'react'
import '../stylesheets/modal.css'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import { createEvent, deleteEvent, updateEvent } from '../actions/actions'
import { connect } from 'react-redux'

class Modal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: ''
        }
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December']
    }

    save = () => {
        if (this.props.update === 0) {
            if (this.state.text.length !== 0) {
                this.props.createEvent({
                    date: JSON.stringify(new Date(this.props.date)),
                    text: this.state.text
                })
            }
        } else {
            this.props.updateEvent({date: JSON.stringify(new Date(this.props.date)), text: this.state.text})
        }
        this.props.hide()
    }

    delete = () => {
        this.props.deleteEvent(JSON.stringify(new Date(this.props.date)))
        this.props.hide()
    }

    handleChangeEventText = (event) => {
        this.setState({ text: event.target.value })
    }

    render () {
        return (
            <div className="modal">
                <div className="title">
                    {this.props.date.getDate() + ' ' + this.months[this.props.date.getMonth()]}
                </div>
                <textarea className="textarea" onChange={this.handleChangeEventText}/>
                <div className="footer">
                    <IconButton aria-label="check" color="primary">
                        <CheckIcon fontSize="large" className="whiteIcon" onClick={this.save}/>
                    </IconButton>
                    <IconButton aria-label="delete" color="primary">
                        <DeleteIcon fontSize="large" className="whiteIcon" onClick={this.delete}/>
                    </IconButton>
                    <IconButton aria-label="close" color="primary">
                        <CloseIcon fontSize="large" className="whiteIcon" onClick={this.props.hide}/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        events: store.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createEvent: (event) => dispatch(createEvent(event)),
        updateEvent: (event) => dispatch(updateEvent(event)),
        deleteEvent: (date) => dispatch(deleteEvent(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
