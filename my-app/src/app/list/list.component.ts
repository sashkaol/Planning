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
    shown = false;

}