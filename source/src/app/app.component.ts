import { Component, OnInit } from '@angular/core';
import { EndpointService } from './services/endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private endpointService: EndpointService) {}

  ngOnInit(): void {
    // this.endpointService.getAllCats().subscribe(
    //   data => {
    //     console.log('data received = ' + data.name);
    //   }
    // );
  }

}
