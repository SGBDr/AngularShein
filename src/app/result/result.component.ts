import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() onWay : any = []

  constructor() { 
    console.log(this.onWay)
  }

  ngOnInit(): void {
  }

}
