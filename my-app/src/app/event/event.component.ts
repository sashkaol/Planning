import { Component, Input } from "@angular/core";

@Component({
    selector: 'event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class Event {
    coach = [
        'Кто-то',
        'Еще кто-то'
    ];
    @Input() subtitle: string = '';
    @Input() type: string = '';
}