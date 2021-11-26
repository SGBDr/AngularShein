import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wel',
  templateUrl: './wel.component.html',
  styleUrls: ['./wel.component.scss']
})
export class WelComponent implements OnInit {

  bestR : any[] = []
  Result : any[] = []
  onWay : any = []

  price : string = "20"
  name : string = "robe"

  constructor(private httpclient : HttpClient) { 
    
  }

  Onsearch(name : string){
    this.search(name)
  }
  
  setPrice(){
    this.price.replace('€', '')
    this.price.replace(' ', '')
    this.price.replace(',', '.')
    this.price += ' €'
  }

  exploitResults(){
    setInterval(() => {
      for(let r of this.Result){
        if(r.price.indexOf(this.price))this.bestR.push(r)
      }
    }, 1500)
  }

  search(name : String){
    this.price.replace('€', '')
    this.httpclient
        .get<any[]>("localhost:8080/bot/" + name + "/" + this.price)
        .subscribe(
          (r) => {
            this.Result = r
          },
          (e) => {
            console.log('Erreur ! : ' + e);
          }
        );
  }

  ngOnInit(): void {
  }

}
