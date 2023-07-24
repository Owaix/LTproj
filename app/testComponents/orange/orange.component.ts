import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/spinner.service';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss'],
})
export class OrangeComponent implements OnInit {

  constructor(private service: LoaderService) { }

    ngOnInit() {
     
    }
}
