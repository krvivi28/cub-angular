import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {
public service=inject(AppService);
}
