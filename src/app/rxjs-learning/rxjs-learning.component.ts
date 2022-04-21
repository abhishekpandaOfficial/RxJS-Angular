import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  Orderstat!: Observable<string>;
  orderName!:string ;

  /* ------------------ Of () Operator -----------*/

  studentLists = ['Abhishek','Sumit','Sinu','Mama'];
  student$ = of(this.studentLists);

  studentObj = of(
    {Id:1,Name:'Abhishek Panda',Gender:'Male'},
    {Id:2,Name:'Akshita Panda',Gender:'Female'},
    {Id:3,Name:'Janaki Lata Panda',Gender:'Female'},
  )

  OrderStatus =['Order-InProgress','Order-Placed','Order-Delivered','Feedback']

  orderDetails = of(this.OrderStatus);

  constructor() { }

  ngOnInit(): void {
// **************************************** Need to Subscribe the for the Observable ***********************
this.orderDetails.subscribe(data=>
  {
    setInterval(()=>{
     console.log(data);
    },10000)
  })


this.student$.subscribe(data=>
  {
    console.log(data);
  })
  this.studentObj.subscribe(data=>
    {
      console.log(data);
    })
  


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
