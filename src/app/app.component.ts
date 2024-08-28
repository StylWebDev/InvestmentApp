import { Component } from '@angular/core';
import {HeaderComponent } from './header/header.component';
import {FlexComponent} from "./flex/flex.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {ResultsComponent} from "./results/results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FlexComponent, CalculatorComponent, ResultsComponent]
})
export class AppComponent {

}
