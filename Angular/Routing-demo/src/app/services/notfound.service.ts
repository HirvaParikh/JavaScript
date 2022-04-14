import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class NotFoundService {
  notfound$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  emit(value: boolean){
    this.notfound$.next(value);
  }
  get value():boolean{
    return(this.notfound$ as BehaviorSubject<boolean>).getValue();
  }
}
