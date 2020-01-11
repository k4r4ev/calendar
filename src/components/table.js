import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

class Table extends React.Component {
    constructor (props) {
        super(props)
        this.date = new Date()
        this.page = []
        this.months = [{
            id: 0,
            name: 'january',
            length: 31
        }, {
            id: 1,
            name: 'february',
            length: 28
        }, {
            id: 2,
            name: 'march',
            length: 31
        }, {
            id: 3,
            name: 'april',
            length: 30
        }, {
            id: 4,
            name: 'may',
            length: 31
        }, {
            id: 5,
            name: 'june',
            length: 30
        }, {
            id: 6,
            name: 'july',
            length: 31
        }, {
            id: 7,
            name: 'august',
            length: 31
        }, {
            id: 8,
            name: 'september',
            length: 30
        }, {
            id: 9,
            name: 'october',
            length: 31
        }, {
            id: 10,
            name: 'november',
            length: 30
        }, {
            id: 11,
            name: 'december',
            length: 31
        }]
        this.state = {
            month: []
        }
        this.preparePage(new Date())
    }

    preparePage = () => {
        let currentMonth = this.date.getMonth()
        let currentDay = this.date.getDay()
        this.page.push(new Date('December 30, 2019 01:00:00'))
        this.page.push(new Date('December 31, 2019 01:00:00'))
        this.page.push(new Date('January 1, 2020 01:00:00'))
        this.page.push(new Date('January 2, 2020 01:00:00'))
        this.page.push(new Date('January 3, 2020 01:00:00'))
        this.page.push(new Date('January 4, 2020 01:00:00'))
        this.page.push(new Date('January 5, 2020 01:00:00'))
        this.page.push(new Date('January 6, 2020 01:00:00'))
        this.page.push(new Date('January 7, 2020 01:00:00'))
        this.page.push(new Date('January 8, 2020 01:00:00'))
        this.page.push(new Date('January 9, 2020 01:00:00'))
        this.page.push(new Date('January 10, 2020 01:00:00'))
        this.page.push(new Date('January 11, 2020 01:00:00'))
        this.page.push(new Date('January 12, 2020 01:00:00'))
        this.page.push(new Date('January 13, 2020 01:00:00'))
        this.page.push(new Date('January 14, 2020 01:00:00'))
        this.page.push(new Date('January 15, 2020 01:00:00'))
        this.page.push(new Date('January 16, 2020 01:00:00'))
        this.page.push(new Date('January 17, 2020 01:00:00'))
        this.page.push(new Date('January 18, 2020 01:00:00'))
        this.page.push(new Date('January 19, 2020 01:00:00'))
        this.page.push(new Date('January 20, 2020 01:00:00'))
        this.page.push(new Date('January 21, 2020 01:00:00'))
        this.page.push(new Date('January 22, 2020 01:00:00'))
        this.page.push(new Date('January 23, 2020 01:00:00'))
        this.page.push(new Date('January 24, 2020 01:00:00'))
        this.page.push(new Date('January 25, 2020 01:00:00'))
        this.page.push(new Date('January 26, 2020 01:00:00'))
        this.page.push(new Date('January 27, 2020 01:00:00'))
        this.page.push(new Date('January 28, 2020 01:00:00'))
        this.page.push(new Date('January 29, 2020 01:00:00'))
        this.page.push(new Date('January 30, 2020 01:00:00'))
        this.page.push(new Date('January 31, 2020 01:00:00'))
        this.page.push(new Date('February 1, 2020 01:00:00'))
        this.page.push(new Date('February 2, 2020 01:00:00'))
        console.log(this.page)
    }

    render () {
        return (
            <div className="table">
                <table className="calendar">
                    <caption>
                        <IconButton aria-label="add">
                            <ArrowLeftIcon className="blackIcon" fontSize="large"/>
                        </IconButton>
                        January 2020
                        <IconButton aria-label="add">
                            <ArrowRightIcon className="blackIcon" fontSize="large"/>
                        </IconButton></caption>
                    <tr className="weekdays">
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                        <th scope="col">Saturday</th>
                        <th scope="col">Sunday</th>
                    </tr>

                    <tr className="days">
                        <td className="day other-month">
                            <div className="date">27</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">28</div>
                            <div className="event">
                                <div className="event-desc">
                                    HTML 5 lecture with Brad Traversy from Eduonix
                                </div>
                                <div className="event-time">
                                    1:00pm to 3:00pm
                                </div>
                            </div>
                        </td>
                        <td className="day other-month">
                            <div className="date">29</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">30</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">31</div>
                        </td>


                        <td className="day">
                            <div className="date">1</div>
                        </td>
                        <td className="day">
                            <div className="date">2</div>
                            <div className="event">
                                <div className="event-desc">
                                    Career development @ Community College room #402
                                </div>

                                <div className="event-time">
                                    2:00pm to 5:00pm
                                </div>
                            </div>
                            <div className="event">
                                <div className="event-desc">
                                    Test event 2
                                </div>

                                <div className="event-time">
                                    5:00pm to 6:00pm
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="day">
                            <div className="date">3</div>
                        </td>
                        <td className="day">
                            <div className="date">4</div>
                        </td>
                        <td className="day">
                            <div className="date">5</div>
                        </td>
                        <td className="day">
                            <div className="date">6</div>
                        </td>
                        <td className="day">
                            <div className="date">7</div>
                            <div className="event">
                                <div className="event-desc">
                                    Group Project meetup
                                </div>
                                <div className="event-time">
                                    6:00pm to 8:30pm
                                </div>
                            </div>
                        </td>
                        <td className="day">
                            <div className="date">8</div>
                        </td>
                        <td className="day">
                            <div className="date">9</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="day">
                            <div className="date">10</div>
                        </td>
                        <td className="day">
                            <div className="date">11</div>
                        </td>
                        <td className="day">
                            <div className="date">12</div>
                        </td>
                        <td className="day">
                            <div className="date">13</div>
                        </td>
                        <td className="day">
                            <div className="date">14</div>
                            <div className="event">
                                <div className="event-desc">
                                    Board Meeting
                                </div>
                                <div className="event-time">
                                    1:00pm to 3:00pm
                                </div>
                            </div>
                        </td>
                        <td className="day">
                            <div className="date">15</div>
                        </td>
                        <td className="day">
                            <div className="date">16</div>
                        </td>
                    </tr>
                    <tr>

                        <td className="day">
                            <div className="date">17</div>
                        </td>
                        <td className="day">
                            <div className="date">18</div>
                        </td>
                        <td className="day">
                            <div className="date">19</div>
                        </td>
                        <td className="day">
                            <div className="date">20</div>
                        </td>
                        <td className="day">
                            <div className="date">21</div>
                        </td>
                        <td className="day">
                            <div className="date">22</div>
                            <div className="event">
                                <div className="event-desc">
                                    Conference call
                                </div>
                                <div className="event-time">
                                    9:00am to 12:00pm
                                </div>
                            </div>
                        </td>
                        <td className="day">
                            <div className="date">23</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="day">
                            <div className="date">24</div>
                        </td>
                        <td className="day">
                            <div className="date">25</div>
                            <div className="event">
                                <div className="event-desc">
                                    Conference Call
                                </div>
                                <div className="event-time">
                                    1:00pm to 3:00pm
                                </div>
                            </div>
                        </td>
                        <td className="day">
                            <div className="date">26</div>
                        </td>
                        <td className="day">
                            <div className="date">27</div>
                        </td>
                        <td className="day">
                            <div className="date">28</div>
                        </td>
                        <td className="day">
                            <div className="date">29</div>
                        </td>
                        <td className="day">
                            <div className="date">30</div>
                        </td>
                    </tr>
                    <tr>

                        <td className="day">
                            <div className="date">31</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">1</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">2</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">3</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">4</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">5</div>
                        </td>
                        <td className="day other-month">
                            <div className="date">6</div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Table
