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
    coachValue = {
        first: '',
        second: '',
        third: ''
    }
    selectedCoach = {
        first: '',
        second: '',
        third: ''
    }
    coach = [
        'Кто-то',
        'Еще кто-то'
    ]
    selectALot: string[] = ['Поиск', 'Группа', 'Должность', 'Стаж']

    public pushAtLot(value: string) {
        if (this.selectALot.indexOf(value) == -1) {
            this.selectALot.push(value);
            console.log('добавили');
        } else {
            console.log(this.selectALot.indexOf(value))
            this.selectALot.splice(this.selectALot.indexOf(value), this.selectALot.indexOf(value) + 1)
        }
    }

    public select(id: string) {
        this.isActive = id
    }

    // close tab for new plan

    @Output() onClose = new EventEmitter<boolean>()
    close(increased: any) {
        this.onClose.emit(increased)
    }

    // open selects

    public open(id: string) {
        if (this.isOpen == '') {
            this.isOpen = id
        } else {
            this.isOpen = ''
        }
    }

    public selectCoach(value: string, id: string) {
        switch (id) {
            case 'first':
                this.coachValue.first = value
                this.selectedCoach.first = value
                break;
            case 'second':
                this.coachValue.second = value
                this.selectedCoach.second = value
                break;
            case 'third':
                this.coachValue.third = value
                this.selectedCoach.third = value
                break;
            default:
                break;
        }
    }

    // blue color for selected item

    public selectItem(value: string) {
        this.value = value
        this.isSelect = value
    }

    isSelected = {
        position: '',
        group: '',
        exp: '',
        division: '',
        region: '',
        city: ''
    }
    positionValue = '';
    groupValue = '';
    expValue = '';
    division = '';
    region = '';
    city = '';

    // set value for selects

    public selectFilter(value: string, el: string) {
        switch (el) {
            case 'position':
                this.positionValue = value
                break;
            case 'group':
                this.groupValue = value
                break;
            case 'exp':
                this.expValue = value
                break;
            case 'division':
                this.division = value
                break;
            case 'region':
                this.region = value
                break;
            case 'city':
                this.city = value
                break;
            default:
                break;
        }
    }

    // check for checkbox for select all

    public checkAll() {
        let all = document.getElementById('all') as HTMLInputElement;
        let inputs = document.getElementsByName('people');
        inputs.forEach(el => {
            let checkbox = el as HTMLInputElement
            if (all.checked) {
                checkbox.checked = true
            } else {
                checkbox.checked = false
            }
        })
    }

    // additional check for checkboxes 

    public checkNotAll() {
        let allCheck = document.getElementById('all') as HTMLInputElement;
        if (allCheck) {
            let checks = document.getElementsByName('people');
            let secCheck = true;
            checks.forEach(el => {
                let check = el as HTMLInputElement;
                if (!(check.checked)) {
                    allCheck.checked = false;
                    secCheck = false;
                } else {
                }
            })
            if (secCheck) {
                allCheck.checked = true
            }
        }
    }

    public clear() {
        return this.isSelected = {
            position: '',
            group: '',
            exp: '',
            division: '',
            region: '',
            city: ''
        },
            this.positionValue = '',
            this.groupValue = '',
            this.expValue = '',
            this.division = '',
            this.region = '',
            this.city = ''
    }
}

