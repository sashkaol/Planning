import { Component } from '@angular/core';

@Component({
    selector: 'planning',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.scss']
})
export class Planning {
    isActive = 'Групповое';

    onOpen(increased: string) {
        this.isActive = increased;
        console.log(increased);
    }
}