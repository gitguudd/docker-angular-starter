import { Component, Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'start-root',
  templateUrl: './start.component.html'
})
@Injectable()
export class StartComponent {
  title = 'starter-component';
  time:string = '';

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTime() {
    this.getServerTime().subscribe((data: any) => {
      this.time = data['time'];
    });
  }

  private getServerTime() {
    return this.http.get(`${this.apiUrl}/time`);
  }
}
