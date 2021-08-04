import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComp implements OnInit{
    @Input() tabs: string[] = [];
    activeTab = ''

    ngOnInit() {
        this.activeTab = this.tabs[0];
    }
    
    public select(value: string) {
        this.activeTab = value; 
    }

}