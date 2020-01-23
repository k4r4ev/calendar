import React from 'react'
import Select from 'react-select'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import AutoRenewIcon from '@material-ui/icons/Autorenew'
import { createEvent } from '../actions/actions'
import { connect } from 'react-redux'

class Header extends React.Component {
    render () {
        const options = []
        this.props.events.map((event) => options.push({
            value: event.text,
            label: event.text
        }))
        return (
            <div className="header">
                <Select className="select" options={options}/>
                <div className="header__buttons">
                    <IconButton aria-label="add">
                        <AddIcon className="whiteIcon" fontSize="large"/>
                    </IconButton>
                    <IconButton aria-label="add">
                        <AutoRenewIcon className="whiteIcon" fontSize="large"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
