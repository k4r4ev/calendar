class Month {
    constructor (date) {
        this.days = []
        this.date = date
        this.lastDateOfMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
        this.lastDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), this.lastDateOfMonth).getDay()
        this.firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()
        if (this.firstDayOfMonth !== 0) {   //пустые клетки до первого дня текущего месяца
            for (let i = 1; i < this.firstDayOfMonth; i++) {
                this.days.push({
                    date: new Date(this.date.getFullYear(), this.date.getMonth(), i - this.firstDayOfMonth + 1),
                    text: 'dd'
                })
            }
        } else { // если первый день месяца выпадает на воскресенье, то требуется 7 пустых клеток
            for (let i = 0; i < 6; i++) {
                this.days.push({
                    date: new Date(this.date.getFullYear(), this.date.getMonth(), i - 5),
                    text: 'dd'
                })
            }
        }
        for (let i = 1; i <= this.lastDateOfMonth; i++) {    //дни месяца
            this.days.push({
                date: new Date(this.date.getFullYear(), this.date.getMonth(), i),
                text: 'dd'
            })
        }
        if (this.lastDayOfMonth !== 0) { //пустые клетки после последнего дня месяца
            for (let i = this.lastDayOfMonth; i < 7; i++) {
                this.days.push({
                    date: new Date(this.date.getFullYear(), this.date.getMonth() + 1, i - this.lastDayOfMonth + 1),
                    text: 'dd'
                })
            }
        }
        console.log(this.days)
    }
}

export default Month
