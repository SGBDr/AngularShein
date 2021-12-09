import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wel',
  templateUrl: './wel.component.html',
  styleUrls: ['./wel.component.scss']
})
export class WelComponent implements OnInit {

  bestR : any[] = []
  Result : any[] = []
  onWay = []
  price : string = "20"
  name : string = "robe"
  ss : boolean = false;

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
      this.ss = true;
      for(let i = 0; i < this.Result.length; i++){
        let r = this.Result[i];
        setTimeout(() => {
          this.onWay = r
          if(r.name.toLowerCase().indexOf(this.name.toLocaleLowerCase()) != -1)this.bestR.push(r)
        }, 1000*i)
      }
    
  }

  search(name : String){
    this.price.replace('€', '')
    this.ss = false
    this.Result = []
    this.httpclient
        .get<any>("https://sheinboot.herokuapp.com/springbot/" + name + "/" + this.price)
        .subscribe(
          (r) => {
            this.Result = r
            console.log(r)
            this.exploitResults()
          },
          (error) => {
            console.log(error.error);
          }
        );
  }

  ngOnInit(): void {
  }

}
