import { Component, Output, EventEmitter } from '@angular/core'
import { Plans } from '../list/mock-list'

@Component({
    selector: 'new-plan',
    templateUrl: './newPlan.component.html',
    styleUrls: ['./newPlan.component.scss']
})
export class NewPlanComponent {
    isActive = 'basic';
    list = Plans;
    isSelect = ''
    isOpen = '';
    value = '';
    coach = [
        'Кто-то',
        'Еще кто-то'
    ]

    public select(id: string) {
        this.isActive = id
    }

    @Output() onClose = new EventEmitter<boolean>()
    close(increased: any) {
        this.onClose.emit(increased)
    }

    public open(id: string) {
        if (this.isOpen == '') {
            this.isOpen = id
        } else {
            this.isOpen = ''
        }
    }

    public selectItem(value: string) {
        this.value = value
        this.isSelect = value
    }
}