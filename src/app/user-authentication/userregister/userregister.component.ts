import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'projects/my-library/src/lib/local-services/application.service';

@Component({
  selector: 'lib-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private applicationService:ApplicationService) { }

  ngOnInit(): void {
  }

}
