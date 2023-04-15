import {Component, OnInit} from '@angular/core';
import {RestServiceService} from "./rest-service.service";
import {ModelStringConversion} from "../model/model.stringconversion";
import {TreeNode} from "../model/model.foodnode";



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

  all_records: ModelStringConversion[] = [];

  testRe:TreeNode[] = [];

  cols: any[] = [
    {field: "id",header: "Номер"},
    {field: "dateSave",header: "Дата сохранения записи"},
    {field: "originalString",header: "Оригинальная строка"},
    {field: "convertedString",header: "Изменённая строка"},
  ]


  res = {
    "data":
      [
        {
          "data":{
            "id": 6,
            "dateSave": "Mar 26, 2023 7:46:14 PM",
            "originalString": "яумамыпро",
            "convertedString": "ммпр",
          },
          "children":[
            {
              "data":{
                "id": 1,
                "dateSave": "sdfwerrq3wrwq3",
                "originalString": "trrwetwertwe"
              },
            },
          ]
        },
      ]
  }


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
      this.testRe = this.res.data
      console.log(this.testRe)
      this.all_records = value.data
      console.log(this.testRe)
      console.log(this.all_records)
    })
  }


}
