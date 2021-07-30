import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'new-plan',
    templateUrl: './newPlan.component.html',
    styleUrls: ['./newPlan.component.scss']
})
export class NewPlanComponent {
    isActive = 'basic';

    public select(id: string) {
        this.isActive = id
    }

    @Output() onClose = new EventEmitter<boolean>()
    close(increased: any) {
        this.onClose.emit(increased)
    }
}