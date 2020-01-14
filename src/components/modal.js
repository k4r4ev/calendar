import React from 'react'
import '../stylesheets/modal.css'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'

class Modal extends React.Component {
    constructor (props) {
        super(props)
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
                />
                <div>
                    <IconButton aria-label="check" color="primary"> <CheckIcon
                        fontSize="large" className="whiteIcon"/></IconButton>
                    <IconButton aria-label="close" color="primary"> <CloseIcon
                        fontSize="large" className="whiteIcon" onClick={this.props.hideModal}/></IconButton>
                </div>
            </div>
        )
    }
}

export default Modal
