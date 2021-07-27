import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public profileForm= this.formBuilder.group({
    name:['',Validators.required],
    age:['',Validators.required],
    class:['',Validators.required],
    address:this.formBuilder.group({
      street:['',Validators.required],
      city:['',Validators.required]
    }),
    aliases:this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

 

  public get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
  public addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
  public onSubmit(){
    console.log(this.profileForm.value);
  }

}
