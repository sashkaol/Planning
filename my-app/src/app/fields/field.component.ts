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
    isSelect = '';

    public selectItem(item: string) {
        this.isSelect = item;
    }
}