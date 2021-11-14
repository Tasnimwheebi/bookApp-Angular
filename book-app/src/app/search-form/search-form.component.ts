import { BooksLibraryService } from './../books-library.service';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public Bookname:string='';
  public Books:any;
  
  constructor(
    private bookSrv:BooksLibraryService
    ) { }
  ngOnInit(): void {
  }
  public GetBooks( bookCategory:string){
     this.bookSrv.GetBooksByCategory(this.Bookname,bookCategory)
    .subscribe(
      (response : any)=>{
        console.log('data response',response.items)
        this.Books=response.items;
      }
    );
  }
  
}
    
