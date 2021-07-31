import { Component } from '@angular/core';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']  
})
export class FiltersComponent {
    isActive = 'group';
    isSelected = {
        program: '',
        period: '',
        status: ''
    }
    isOpen = '';
    programValue = '';
    periodValue = '';
    statusValue = '';

    public select(id: string) {
        this.isActive = id
    }

    public open(id: string) {
        if (this.isOpen == '') {
            this.isOpen = id
        } else {
            this.isOpen = ''
        }
    }

    public selectItem(value: string, el: string) {
        switch (el) {
            case 'program':
                this.programValue = value
                break;
            case 'status':
                this.statusValue = value
                break;
                case 'period':
                this.periodValue = value
                break;
            default:
                break;
        }    
    }
}