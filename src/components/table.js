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
        this.props.events.filter((event) => {
            this.month.days.map(m => {
                if (new Date(event.date).toDateString() === m.date.toDateString()) {
                    console.log(new Date(event.date))
                    console.log(m.date)
                }
            })
        })
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
        return (
            <div className="table">
                <table className="calendar">
                    <caption>
                        <IconButton aria-label="add">
                            <ArrowLeftIcon className="blackIcon" onClick={this.previousMonth} fontSize="large"/>
                        </IconButton>
                        {this.months[this.state.date.getMonth()] + ' ' + this.state.date.getFullYear()}
                        <IconButton aria-label="add">
                            <ArrowRightIcon className="blackIcon" onClick={this.nextMonth} fontSize="large"/>
                        </IconButton>
                    </caption>
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
                        {this.state.month.days.slice(0, 7).map((current, index) => <Cell cell={current}
                                                                                         event={this.props.events.filter(
                                                                                             (event) => (new Date(JSON.parse(event.date)).toDateString() === current.date.toDateString()))}
                                                                                         month={this.state.date.getMonth()}/>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(7, 14).map((current, index) => <Cell cell={current}
                                                                                          event={this.props.events.filter(
                                                                                              (event) => new Date(JSON.parse(event.date)).toDateString() === current.date.toDateString())}
                                                                                          month={this.state.date.getMonth()}/>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(14, 21).map((current, index) => <Cell cell={current}
                                                                                           event={this.props.events.filter(
                                                                                               (event) => new Date(JSON.parse(event.date)).toDateString() === current.date.toDateString())}
                                                                                           month={this.state.date.getMonth()}/>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(21, 28).map((current, index) => <Cell cell={current}
                                                                                           event={this.props.events.filter(
                                                                                               (event) => new Date(JSON.parse(event.date)).toDateString() === current.date.toDateString())}
                                                                                           month={this.state.date.getMonth()}/>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(28, 35).map((current, index) => <Cell cell={current}
                                                                                           event={this.props.events.filter(
                                                                                               (event) => new Date(JSON.parse(event.date)).toDateString() === current.date.toDateString())}
                                                                                           month={this.state.date.getMonth()}/>)}
                    </tr>
                    <tr>
                        {this.state.month.days.slice(35, 42).map((current, index) => <Cell cell={current}
                                                                                           event={this.props.events.filter(
                                                                                               (event) => new Date(JSON.parse(event.date)).toDateString() === current.date.toDateString())}
                                                                                           month={this.state.date.getMonth()}/>)}
                    </tr>
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
