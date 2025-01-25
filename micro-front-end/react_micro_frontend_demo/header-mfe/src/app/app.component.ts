import { Component } from '@angular/core';
import { PlatformNavigation } from '../platform-navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'header-mfe';
  constructor(private platformNavigation: PlatformNavigation) {}
  
}
