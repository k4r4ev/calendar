import React from 'react'
import Modal from './modal'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

class Cell extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            modal: '',
            edit: ''
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

    showEditButton = () => {
        this.setState({
            edit: <IconButton className="edit" aria-label="add" onClick={this.showModal}>
                <EditIcon className="blackIcon" fontSize="small"/>
            </IconButton>
        })
    }

    hideEditButton = () => {
        this.setState({
            edit: ''
        })
    }

    render () {
        return (
            <td className={this.getClass()}
                onMouseEnter={this.showEditButton}
                onMouseLeave={this.hideEditButton}>
                <div className="cell__header">
                    <div className="date">{this.props.cell.date.getDate()}</div>
                    {this.state.edit}
                </div>
                {this.getEvent()}
                {this.state.modal}
            </td>
        )
    }
}

export default Cell
