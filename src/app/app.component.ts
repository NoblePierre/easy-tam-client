import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dataUrl: string;
  public title: string;

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.title = 'easy-tam-client';

    this.appService.getTamDataURL().subscribe(dataUrl => {
      this.dataUrl = dataUrl;
      console.log(dataUrl);
    });
  }
}
