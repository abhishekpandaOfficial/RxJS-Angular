import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  Orderstat!: Observable<string>;
  orderName!:string ;

  constructor() { }

  ngOnInit(): void {

    this.Orderstat = new Observable(
      function(observer)
      {
        try
        {
         
            observer.next('InProcess');
         
         

          setInterval(()=>
          {
            observer.next('Processed');
          }, 3000)
         
          setInterval(()=>
          {
            observer.next('Delivered');
          }, 6000)
        

        }
        catch(e)
        {
          observer.error(e)
        }
      }
    )


    this.Orderstat.subscribe(data =>
      {
        console.log("Order is --> " + data);

        this.orderName = data;
      })
  }


  

}
