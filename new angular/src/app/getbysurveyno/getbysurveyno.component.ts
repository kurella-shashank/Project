import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getbysurveyno',
  templateUrl: './getbysurveyno.component.html',
  styleUrls: ['./getbysurveyno.component.css']
})
export class GetbysurveynoComponent implements OnInit {

  public surveyno: number;
  land: any;

  constructor(public service: FarmerService) {   //dependency injection for EmpService 
    this.surveyno = 0;
  }

  ngOnInit(): void {
  }

  getsurveyno(): void {
    this.service.get(this.surveyno).subscribe((data: any) => {console.log(data), this.land = data;});
  }
}
