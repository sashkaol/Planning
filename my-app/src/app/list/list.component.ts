import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Plans } from './mock-list'

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    title = 'list';
    data = Plans;
    xPos = 0;
    yPos = 0;
    shown = false;

    public show(ev: any) {
        this.xPos = ev.clientX - 180
        this.yPos = ev.clientX + 20
        this.shown = true
    }
}