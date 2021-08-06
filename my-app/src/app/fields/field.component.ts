import { Component, Input } from '@angular/core';

@Component({
    selector: 'combobox',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class SelectComp {
    selectOpen = false;
    @Input() list: string[] = [];
    @Input() label: string = '';
    @Input() img: string = '../../assets/arrow.svg';
    @Input() picture: string = '';
    @Input() type: string = 'select';
    @Input() withCancel: boolean = false;
    datePickerSelect: boolean = false;
    isSelect = '';

    onSetDate(inc: string) {
        this.isSelect = inc;
    }

    public selectItem(item: string) {
        this.isSelect = item;
    }
}