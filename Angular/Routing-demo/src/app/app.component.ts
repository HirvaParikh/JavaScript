import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotFoundService } from './services/notfound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'App works';
  subscription: Subscription
  isNotFound: boolean = false;

  constructor(private nfService: NotFoundService) {}
  ngOnInit() {
    this.subscription = this.nfService.notfound$.subscribe(isNotFound => this.isNotFound = isNotFound)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
