import { Component, OnInit } from '@angular/core';
import { PageControlService } from '../local-services/page-control.service';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private pagecontrol:PageControlService) { }

  ngOnInit(): void {
  
 
  }
  goNext(){
    this.pagecontrol.nextNav({isNextDisable:true});
  }

  goBack(){
    this.pagecontrol.backNav({isBackDisable:true});
  }
}
