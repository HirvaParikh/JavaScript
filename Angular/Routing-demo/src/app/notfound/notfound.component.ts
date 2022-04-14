import { Component, OnInit } from '@angular/core';
import { NotFoundService } from '../services/notfound.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private nfService: NotFoundService) { }

  ngOnInit(): void {
    this.nfService.emit(true);
  }

  ngOnDestroy() {
      this.nfService.emit(false);
  }

}
