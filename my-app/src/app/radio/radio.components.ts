import { Component, Input } from "@angular/core";

@Component({
    selector: 'radio',
    templateUrl: './radio.components.html',
    styleUrls: ['./radio.components.scss']
})
export class RadioComp {
    @Input() name: string = '';
    @Input() list: string[] = [];
}