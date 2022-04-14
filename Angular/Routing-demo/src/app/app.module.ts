import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ExamModule } from './exam/exam.module';
import { FormsModule } from '@angular/forms';
import { NotFoundService } from './services/notfound.service';
import { ProductRoutingModule } from './product/product-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExamModule,
    ProductRoutingModule,
    AppRoutingModule
  ],
  providers: [ NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
