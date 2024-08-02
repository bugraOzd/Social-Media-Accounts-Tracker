import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  animations: [
    trigger('drawerState', [
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})
export class DrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() drawerToggled = new EventEmitter<boolean>();

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    this.drawerToggled.emit(this.isOpen);
  }
}
