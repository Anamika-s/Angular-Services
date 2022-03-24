import { Component, OnInit } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import {filter} from "rxjs/operators";
@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
private subscription : Subscription;
  constructor() { }
  
  ngOnInit(): void {
    // Promise
    // const promise = new Promise(resolve=>
    //   { 
    //     setTimeout(()=>
    //     {
    //    resolve("Promise resolved");
    //     },1000)
    //   }) 
    //   promise.then(res=>console.log(res));

    const promise = new Promise(resolve=>
      {
        // console.log("promise is called");
        setTimeout(()=>
        {
          resolve("Promise1 resolved")
          resolve("Promise2 resolved")
          resolve("Promise3 resolved")
        })
      })

      promise.then(res => console.log(res));
    // // Observable
    // const observable = new Observable(sub=>
    //   {
    //    setTimeout(()=>
    //    {
    //      sub.next("Observable working");

    //    },1000)
    //   })

    //   observable.subscribe(res=>console.log(res));

    // const observable = new Observable(sub=>
    //   {
    //     console.log("Observable is called");
    //    setTimeout(()=>
    //    {
    //      sub.next("Observable1 working");
    //      sub.next("Observable2 working");
    //      sub.next("Observable3 working");

    //    },1000)
    //   })

    //   observable.pipe(filter(d=>d=="Observable1 working"),      
    //   ).subscribe(res=>console.log(res));
 const observable = new   Observable(sub=>
  {
    let x = 1;
     setInterval(()=>
     { x=x+1;
       sub.next(x);
     },1000)
  })
  this.subscription= observable.subscribe(res => console.log(res));
  
}
  // subscribe()  
  // {
  // }
  unsubscribe()
  {
  this.subscription.unsubscribe();
  }

  //  observable.subscribe(res => console.log(res));



   
   
    
  
}