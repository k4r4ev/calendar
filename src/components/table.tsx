import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Cell from './cell'
import Month from '../classes/month'
import { connect } from 'react-redux'
import { createEvent } from '../actions/actions'
import '../stylesheets/table.css'

interface State {
    date: Date,
    month: Month
}

interface Props {
    events: Array<{ date: Date, text: String }>
}

class Table extends React.Component<Props, State> {
    months: Array<String>
    month: Object
    title: String

    constructor(props: Props) {
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

    render() {
        let events: Array<{ date: Date, text: String }> = (this.props.events.filter(
            (event: { date: Date, text: String }) => new Date(event.date).getMonth() === this.state.date.getMonth()))
        let monthEvents: Array<String> = []
        this.state.month.days.map((currentDay: { date: Date }, index: number) => {
            monthEvents.push('')
            events.map((currentEvent: any) => {
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
                            <ArrowLeftIcon className="blackIcon" fontSize="large" />
                        </IconButton>
                        <span className="monthName">
                            {this.months[this.state.date.getMonth()] + ' ' + this.state.date.getFullYear()}
                        </span>
                        <IconButton aria-label="add" onClick={this.nextMonth}>
                            <ArrowRightIcon className="blackIcon" fontSize="large" />
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
                            {this.state.month.days.slice(0, 7).map((cell: any) =>
                                <React.Fragment key={index}><Cell cell={cell}
                                    event={monthEvents[index++]}
                                    month={this.state.date.getMonth()} />
                                </React.Fragment>)}
                        </tr>
                        <tr>
                            {this.state.month.days.slice(7, 14).map((cell: any) =>
                                <React.Fragment key={index}><Cell cell={cell}
                                    event={monthEvents[index++]}
                                    month={this.state.date.getMonth()} />
                                </React.Fragment>)}
                        </tr>
                        <tr>
                            {this.state.month.days.slice(14, 21).map((cell: any) =>
                                <React.Fragment key={index}><Cell cell={cell}
                                    event={monthEvents[index++]}
                                    month={this.state.date.getMonth()} />
                                </React.Fragment>)}
                        </tr>
                        <tr>
                            {this.state.month.days.slice(21, 28).map((cell: any) =>
                                <React.Fragment key={index}><Cell cell={cell}
                                    event={monthEvents[index++]}
                                    month={this.state.date.getMonth()} />
                                </React.Fragment>)}
                        </tr>
                        <tr>
                            {this.state.month.days.slice(28, 35).map((cell: any) =>
                                <React.Fragment key={index}><Cell cell={cell}
                                    event={monthEvents[index++]}
                                    month={this.state.date.getMonth()} />
                                </React.Fragment>)}
                        </tr>
                        <tr>
                            {this.state.month.days.slice(35, 42).map((cell: any) =>
                                <React.Fragment key={index}><Cell cell={cell}
                                    event={monthEvents[index++]}
                                    month={this.state.date.getMonth()} />
                                </React.Fragment>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (store: { events: any }) => {
    return {
        events: store.events
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        createEvent: (event: any) => dispatch(createEvent(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
