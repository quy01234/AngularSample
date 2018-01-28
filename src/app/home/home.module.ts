import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { RighterComponent } from './righter/righter.component';
import { BookCaseComponent } from './book-case/book-case.component';
import { MainDetailComponent } from './main-detail/main-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [MainComponent, HeaderComponent, RighterComponent, BookCaseComponent, MainDetailComponent]
})
export class HomeModule { }
