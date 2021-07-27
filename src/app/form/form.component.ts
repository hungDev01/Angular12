import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

 

  public listClass=["C1909G","C1908G"];
  model = new Student("","","",this.listClass[0]);
  
  constructor( ) { }
  
  ngOnInit(): void {
  }
  public onSubmit(){
  
   console.log(this.model);
  }
  public onChange(event:any){
    console.log(event.target.value);
  }
}
