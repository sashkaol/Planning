import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComp implements OnInit {
    @Input() tabs: string[] = [];
    activeTab = '';

    @Output() onOpen = new EventEmitter<string>();
    
    open(increased: string) {
        increased = this.activeTab;
        console.log(increased);
        this.onOpen.emit(increased);
    }

    ngOnInit() {
        this.activeTab = this.tabs[0];
    }

    public select(value: string) {
        this.activeTab = value;
    }

}