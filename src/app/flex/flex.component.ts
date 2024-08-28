import {Component, Input} from '@angular/core';

interface Flex {
  wrap?: boolean;
  col?: boolean;
  gap?: string;
  gapX?: 2 | 5 | 8 | 10 | 16 ;
  gapY?: 2 | 5 | 8 | 10 | 16 ;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  items?: 'start' | 'end' | 'center';
}

@Component({
  selector: 'app-flex',
  standalone: true,
  imports: [],
  templateUrl: './flex.component.html',
})
export class FlexComponent {
  @Input() flex?: Flex;
}
