import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Cell from './cell'
import Month from '../classes/month'
import { connect } from 'react-redux'
import { createEvent } from '../actions/actions'

class Table extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            date: new Date(),
            month: new Month(new Date())
        }
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December']
        this.month = new Month(this.state.date)
        this.title = this.months[this.state.date.getMonth()] + ' ' + this.state.date.getFullYear()
    }

    nextMonth = () => {
        let currentDate
        if (this.state.date.getMonth() === 11) {
            currentDate = new Date((this.state.date.getFullYear()), (this.state.date.getMonth() + 1), 1)
        } else {
            currentDate = new Date((this.state.date.getFullYear()), (this.state.date.getMonth() + 1), 1)
        }
        this.setState({
            date: new Date(currentDate),
            month: new Month(new Date(currentDate))
        })
    }

    previousMonth = () => {
        let currentDate
        if (this.state.date.getMonth() === 0) {
            currentDate = new Date((this.state.date.getFullYear()), (this.state.date.getMonth() - 1), 1)
        } else {
            currentDate = new Date((this.state.date.getFullYear()), (this.state.date.getMonth() - 1), 1)
        }
        this.setState({
            date: new Date(currentDate),
            month: new Month(new Date(currentDate))
        })
    }

    render () {
        let events = (this.props.events.filter(
            (event) => new Date(event.date).getMonth() === this.state.date.getMonth()))
        let monthEvents = []
        this.state.month.days.map((currentDay, index) => {
            monthEvents.push('')
            events.map((currentEvent) => {
                if (new Date(currentEvent.date).toDateString() === currentDay.date.toDateString()) {
                    monthEvents[index] = (currentEvent.text)
                }
                return currentEvent
            })
            return currentDay
        })
        let index = 0
        return (
            <div className="table">
                <table className="calendar">
                    <caption>
                        <IconButton aria-label="add" onClick={this.previousMonth}>
                            <ArrowLeftIcon className="blackIcon" fontSize="large"/>
                        </IconButton>
                        <span className="monthName">
                            {this.months[this.state.date.getMonth()] + ' ' + this.state.date.getFullYear()}
                        </span>
                        <IconButton aria-label="add" onClick={this.nextMonth}>
                            <ArrowRightIcon className="blackIcon" fontSize="large"/>
                        </IconButton>
                    </caption>
                    <tbody>
                    <tr className="weekdays">
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                        <th scope="col">Saturday</th>
                        <th scope="col">Sunday</th>
                    </tr>
                    <tr>
                        {this.state.month.days.slice(0, 7).map((cell) =>
                            <React.Fragment key={index}><Cell cell={cell}
                                                              event={monthEvents[index++]}
                                                              month={this.state.date.getMonth()}/>
                            </React.Fragment>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(7, 14).map((cell) =>
                            <React.Fragment key={index}><Cell cell={cell}
                                                              event={monthEvents[index++]}
                                                              month={this.state.date.getMonth()}/>
                            </React.Fragment>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(14, 21).map((cell) =>
                            <React.Fragment key={index}><Cell cell={cell}
                                                              event={monthEvents[index++]}
                                                              month={this.state.date.getMonth()}/>
                            </React.Fragment>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(21, 28).map((cell) =>
                            <React.Fragment key={index}><Cell cell={cell}
                                                              event={monthEvents[index++]}
                                                              month={this.state.date.getMonth()}/>
                            </React.Fragment>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(28, 35).map((cell) =>
                            <React.Fragment key={index}><Cell cell={cell}
                                                              event={monthEvents[index++]}
                                                              month={this.state.date.getMonth()}/>
                            </React.Fragment>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(35, 42).map((cell) =>
                            <React.Fragment key={index}><Cell cell={cell}
                                                              event={monthEvents[index++]}
                                                              month={this.state.date.getMonth()}/>
                            </React.Fragment>)}
                    </tr>
                    </tbody>
                </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Table)
