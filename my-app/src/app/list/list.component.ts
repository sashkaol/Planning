import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    title = 'list';
    private name:string = 'ыыы';
    data: any[] = [];

    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            this.data.push({
                date: '12.10.2020',
                plan: 'Составить план'
            })
            document.querySelector('.data')?.insertAdjacentHTML('beforeend', `
            <p>${this.data[i]['date']}</p>
            <p>${this.data[i]['plan']}</p>`)
        }
        console.log(this.data);
        return this.data
    }
}