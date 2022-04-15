import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers : { number: number }[]=[];
  evenNumbers : { number: number }[]=[];

  onIntervalFired(incrementNumber: number){
    console.log(incrementNumber);
  }

  onNumberAdded(incrementNumber: number){
    if (incrementNumber%2 !== 0){
      this.oddNumbers.push({
        number: incrementNumber 
      });

    } else{
      this.evenNumbers.push({
        number: incrementNumber
      });
    }
  }
  

  title = 'InputAndOutput';
}
