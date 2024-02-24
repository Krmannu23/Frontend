import { Component, OnInit } from '@angular/core';
import { PageControlService } from '../../local-services/page-control.service';

@Component({
  selector: 'lib-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.css']
})
export class BasicdetailsComponent implements OnInit {

  constructor(private componentWisePageControl:PageControlService) { }

  ngOnInit(): void {
  }
  goNext(){
    this.componentWisePageControl.nextNav(true)
  }

}
