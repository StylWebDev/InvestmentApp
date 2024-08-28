import { Component } from '@angular/core';
import {FlexComponent} from "../flex/flex.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FlexComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
