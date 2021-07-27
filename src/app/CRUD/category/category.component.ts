import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CRUD/category.service';
import { Category } from 'src/app/CRUD/category/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  public categories: any;
 
  constructor(private apiCategory: CategoryService) {
   
  }

  ngOnInit(): void {
    this.apiCategory.FindAll().subscribe((data) => {
    
      this.categories = data.data;
      console.log(data.data);
    })
  }
 
}
