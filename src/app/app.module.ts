import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOtpInputModule } from 'ng-otp-input';
import { Ng5SliderModule } from 'ng5-slider';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MaterialModule } from './material/material.module';
import { KycModalComponent } from './modals/kyc-modal/kyc-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFormat } from './date-format';
import { DateAdapter } from '@angular/material/core';
import { inrFormat } from './currencyFormat';


@NgModule({
  declarations: [
    AppComponent,
    ChatSectionComponent,
    KycModalComponent,
    inrFormat
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    Ng5SliderModule,
    DeviceDetectorModule,
  ],
  providers: [{ provide: DateAdapter, useClass: DateFormat }],
  bootstrap: [AppComponent]
})
export class AppModule { }
