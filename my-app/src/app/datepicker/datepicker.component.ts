import { Component, DoCheck, Output } from "@angular/core";

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
    caseMonths: string[] = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ]
    day = new Date().getDate();
    month = new Date().getMonth();
    year = new Date().getFullYear();
    amount: number = 0;
    week = new Date().getDay();
    days: number[] = [];
    arrWeek: any[] = [];
    curDate = this.day + ' / ' + this.caseMonths[this.month] + ' / ' + this.year;

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
        if ((this.month == 1) && (this.year % 4 == 0)) {
            this.amount = 29;
        } else if ((this.month == 1) && (this.year % 4 !== 0)) {
            this.amount = 28;
        } if ((this.month == 3) || (this.month == 5) || (this.month == 8) || (this.month == 10)) {
            this.amount = 30;
        } else if ((this.month == 0) || (this.month == 4) || (this.month == 6) || (this.month == 7) || (this.month == 9) || (this.month == 11)) {
            this.amount = 31;
        }
        this.days = [];
        this.createDays(this.amount);
    }

    createDays(amount: number) {
        for (let i = 1; i <= amount; i++) {
            this.days.push(i);
        }
        let month = [];
        let week: any[] = [];
        let dayWeek = new Date(this.year, this.month, 1).getDay();
        if (dayWeek == 0) {
            week = [
                '', '', '', '', '', ''
            ]
        } else if (dayWeek !== 1 && dayWeek !== 0) {
            for (let i = 1; i < dayWeek; i++) {
                week.push('');
            }
        }
        for (let i = 1; i <= amount; i++) {
            week.push(i)
            if (week.length == 7) {
                month.push(week);
                week = []
            }
        }
        month.push(week);
        this.arrWeek = month;
    }

    public getMyDate(day: number) {
        let myDate =  day + ' / ' + this.caseMonths[this.month] + ' / ' + this.year;
        return myDate;
    }
}