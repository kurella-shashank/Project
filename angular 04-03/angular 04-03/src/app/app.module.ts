import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerComponent } from './farmer/farmer.component';
import { BidderComponent } from './bidder/bidder.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BidsviewComponent } from './bidsview/bidsview.component';
import { BidderviewComponent } from './bidderview/bidderview.component';
import { BiddingpageComponent } from './biddingpage/biddingpage.component';
import { FarmersviewComponent } from './farmersview/farmersview.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { LandsviewComponent } from './landsview/landsview.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FarmerComponent,
    BidderComponent,
    FooterComponent,
    HeaderComponent,
    BidsviewComponent,
    BidderviewComponent,
    BiddingpageComponent,
    FarmersviewComponent,
    AdminviewComponent,
    LandsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
