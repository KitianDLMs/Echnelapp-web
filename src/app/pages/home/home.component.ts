import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core' ;
import { RouterModule } from '@angular/router';
import * as AOS from "aos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: false
    });

    AOS.refresh();
  }
}
