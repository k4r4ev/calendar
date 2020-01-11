import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Cell from './cell'

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
        this.page.push({
            date: new Date('December 30, 2019 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('December 31, 2019 01:00:00'),
            task: 'Conference Call'
        })
        this.page.push({
            date: new Date('January 1, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 2, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 3, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 4, 2020 01:00:00'),
            task: 'Board Meeting'
        })
        this.page.push({
            date: new Date('January 5, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 6, 2020 01:00:00'),
            task: 'Board Meeting'
        })
        this.page.push({
            date: new Date('January 7, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 8, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 9, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 10, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 11, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 12, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 13, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 14, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 15, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 16, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 17, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 18, 2020 01:00:00'),
            task: 'Board Meeting'
        })
        this.page.push({
            date: new Date('January 19, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 20, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 21, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 22, 2020 01:00:00'),
            task: 'Career development @ Community College room #402'
        })
        this.page.push({
            date: new Date('January 23, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 24, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 25, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 26, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 27, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 28, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 29, 2020 01:00:00'),
            task: 'Group Project meetup'
        })
        this.page.push({
            date: new Date('January 30, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('January 31, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('February 1, 2020 01:00:00'),
            task: ''
        })
        this.page.push({
            date: new Date('February 2, 2020 01:00:00'),
            task: ''
        })
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
                    <tr>
                        {this.page.slice(0, 7).map((current, index) => <Cell cell={current} month={0}/>)}
                    </tr>
                    <tr>
                        {this.page.slice(7, 14).map((current, index) => <Cell cell={current} month={0}/>)}
                    </tr>
                    <tr>
                        {this.page.slice(14, 21).map((current, index) => <Cell cell={current} month={0}/>)}
                    </tr>
                    <tr>
                        {this.page.slice(21, 28).map((current, index) => <Cell cell={current} month={0}/>)}
                    </tr>
                    <tr>
                        {this.page.slice(28, 35).map((current, index) => <Cell cell={current} month={0}/>)}
                    </tr>
                </table>
            </div>
        )
    }
}

export default Table
