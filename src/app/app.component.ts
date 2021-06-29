import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  bills: Bill[] = []

  newBill: Bill = {} as Bill

  constructor(private service: ServiceService){}

  postBill(myForm: any){
    this.service.postBill(this.newBill).subscribe(
      () => {
        myForm.reset()
        this.newBill = {} as Bill
      }
    )
  }
    
}
