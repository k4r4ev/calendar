import React from 'react'
import '../stylesheets/modal.css'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'
import { createEvent } from '../actions/actions'
import { connect } from 'react-redux'

class Modal extends React.Component {
    constructor (props) {
        super(props)
    }

    save = () => {
        createEvent({
            date: this.props.date,
            text: this.state.text
        })
        this.props.hide()
    }

    handleChangeEventText = (event) => {
        this.setState({ text: event.target.value })
    }

    render () {
        return (
            <div className="modal">
                <TextField id="outlined-basic" label="Title" variant="outlined" size="small"/>
                <TextField
                    id="outlined-multiline-static"
                    label="Text"
                    multiline
                    rows="4"
                    variant="filled"
                    size="large"
                    className="textarea"
                    onChange={this.handleChangeEventText}
                />
                <div>
                    <IconButton aria-label="check" color="primary">
                        <CheckIcon fontSize="large" className="whiteIcon" onClick={this.save}/>
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
        createEvent: event => dispatch(createEvent(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
