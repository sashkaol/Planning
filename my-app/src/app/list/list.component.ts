import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    title = 'list';
    //data: Object[] = [];
    arr: any[] = [];
    //item: Object = {};

    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            let it = [
                '12.11.2020',
                'ususus',
                Math.round(Math.random() * 100),
                '',
                String(Math.round(Math.random() * 100)) + '%'
            ]
            this.arr.push(it)
        }
        console.log(this.arr);
        // for (let i = 0; i < 10; i++) {
        //     this.item = {
        //         Adate: '12.10.2020',
        //         Bplan: 'Составить план',
        //         Cparticipants: Math.round(Math.random() * (i+1) * 100),
        //         Dcoach: '',
        //         Eprogress: String(Math.round(Math.random() * (i+1) * 100)) + '%'
        //     }
        //     this.data.push(this.item)
        //     console.log(this.data[i]);
        // }
        // return this.data, this.arr
        return this.arr
    }
}