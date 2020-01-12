import React from 'react'

class Cell extends React.Component {
    constructor (props) {
        super(props)
        if (this.props.month !== this.props.cell.date.getMonth()) {
            this.className = 'day other-month'
        } else {
            this.className = 'day'
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

    render () {
        return (
            <td className={this.className}>
                <div className="date">{this.props.cell.date.getDate()}</div>
                {this.event}
            </td>
        )
    }
}

export default Cell
