import { AfterViewInit, Component } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: false
    });

    AOS.refresh();
  }
}
