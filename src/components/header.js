import React from 'react'
import Select from 'react-select'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import AutoRenewIcon from '@material-ui/icons/Autorenew'

const options = [
    {
        value: 'chocolate',
        label: 'Chocolate'
    },
    {
        value: 'strawberry',
        label: 'Strawberry'
    },
    {
        value: 'vanilla',
        label: 'Vanilla'
    }
]

class Header extends React.Component {
    render () {
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

export default Header
