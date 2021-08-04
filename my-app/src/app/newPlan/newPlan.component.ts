import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { Plans } from '../list/mock-list'

@Component({
    selector: 'new-plan',
    templateUrl: './newPlan.component.html',
    styleUrls: ['./newPlan.component.scss']
})
export class NewPlanComponent implements OnInit {
    isActive = 'Основное';
    isOpen = '';
    list = Plans;
    plans: string[] = [];
    coach = [
        'Кто-то',
        'Еще кто-то'
    ];
    forRadio: string[] = [
        'Не использовать код доступа', 
        'Требовать регистрацию',
        'Требовать только имя и фамилию',
        'Не требовать регистрацию, имя и фамилию'
    ];
    forCheck: string[] = [
        'Алексей Корсак',
        'Александр Белов',
        'Никита Оленев',
        'Александра Симонян',
        'Павел Симонян'
    ];
    selectALot: string[] = ['Поиск', 'Группа', 'Должность', 'Стаж'];

    open(value: string) {
        if (this.isOpen !== '') {
            this.isOpen = '';
        } else {
            this.isOpen = value;
        }
    }

    ngOnInit() {
        this.list.forEach(el => {
            this.plans.push(el.plan);
        });
    }

    public pushAtLot(value: string) {
        if (this.selectALot.indexOf(value) == -1) {
            this.selectALot.push(value);
        } else {
            console.log(this.selectALot.indexOf(value))
            this.selectALot.splice(this.selectALot.indexOf(value), this.selectALot.indexOf(value) + 1)
        }
    }

    // close tab for new plan

    @Output() onClose = new EventEmitter<boolean>()
    close(increased: any) {
        this.onClose.emit(increased)
    }

    onOpen(increased: string) {
        this.isActive = increased;
        console.log(increased);
    }
}

