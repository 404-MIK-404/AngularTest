import {Component, OnInit} from '@angular/core';
import {RestServiceService} from "./rest-service.service";
import {observable, Observable} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rest-service-ang';


  countRecord = {
    records: 0,
    original_text: "",
    transform_text: "",
  };

  all_records: any[] = []

  constructor(private service: RestServiceService) {}

  getCountRecords(){
    this.service.getDataCountRecords().subscribe(value => {
      this.countRecord.records = value.records
    });
  }


  transformText(){
    this.service.getDataTransformText(this.countRecord.original_text.split('')).subscribe(value => {
      this.countRecord.transform_text = value.transform_text
      this.getCountRecords()
    });
  }


  ngOnInit(): void {
    this.service.getAllRecords().subscribe(value => {
      this.all_records = value.all_records
      console.log(this.all_records)
    })
  }


}
