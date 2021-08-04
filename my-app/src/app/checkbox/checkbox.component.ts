import { Component, Input } from "@angular/core";

@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComp {
    @Input() list: string[] = [];
    @Input() all: boolean = true;
    @Input() name: string = '';

    public checkAll() {
        let all = document.getElementById('all') as HTMLInputElement;
        
        let inputs = document.getElementsByName(this.name);
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
            let checks = document.getElementsByName(this.name);
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
}