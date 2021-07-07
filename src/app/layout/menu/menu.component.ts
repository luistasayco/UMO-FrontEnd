import { Component, Input, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() model: any[];

  constructor(public app: LayoutComponent) { }

  ngOnInit() {
  }
}
