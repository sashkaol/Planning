import { Component, DoCheck } from "@angular/core";

@Component({
    selector: 'datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatePicker implements DoCheck {
    months: string[] = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]
    day = new Date().getDate();
    month = new Date().getMonth();
    year = new Date().getFullYear();
    date = this.months[this.month] + ', ' + this.year;
    amount: number = 0;
    week = new Date().getDay();
    days: number[] = [];
    arrWeek: any[] = [];

    public goNext() {
        if (this.month == 11) {
            this.month = 0;
            this.year++
        } else {
            this.month++
        }
    }

    public goPrev() {
        if (this.month == 0) {
            this.month = 11;
            this.year--
        } else {
            this.month--
        }
    }

    ngDoCheck() {
        this.date = this.months[this.month] + ', ' + this.year;
        if (this.month == 1) {
            this.amount = 28;
        } if (this.month == 3 || this.month == 5 || this.month == 8 || this.month == 10) {
            this.amount = 30;
        } else if (this.month == 4 || this.month == 6 || this.month == 7 || this.month == 9 || this.month == 11) {
            this.amount = 31
        }
        this.days = [];
        this.createDays(this.amount);
    }

    createDays(amount: number) {
        for (let i = 1; i <= amount; i++) {
            this.days.push(i);
        }

        const table = document.getElementById('days');
        let day = '';
        let month = [];
        let week = [];
        let dayWeek;
        for (let i = 1; i <= amount; i++) {
            dayWeek = new Date(this.year, this.month, i).getDay();
            // if (dayWeek == 0) {
            //     month.push([
            //         '', '', '', '', '', '', i
            //     ])
            // } else {
            week.push(i)
            if (week.length == 7) {
                month.push(week);
                week = []
            }
        }
        month.push(week);
        console.log(month);
        this.arrWeek = month;
    }
}