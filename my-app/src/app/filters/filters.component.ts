import { Component } from '@angular/core';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']  
})
export class FiltersComponent {
    isActive = 'group'

    public select(id: string) {
        this.isActive = id
    }
}