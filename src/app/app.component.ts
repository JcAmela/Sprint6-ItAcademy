import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Sprint6';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
