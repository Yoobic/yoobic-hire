import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

// import { AppRoutingModule } from './app-routing.module';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { HeroListComponent } from '../pages/list/list-hero.component';
// import { HeroService } from '../pages/list/list.service.ts';
import { Signin } from '../pages/signin/signin';
import { Register } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
// import { ForgotPW } from '../pages/forgotpw/forgotpw';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    HeroListComponent,
    Signin,
    Register,
    Dashboard
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
    // AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    HeroListComponent,
    Signin,
    Register,
    Dashboard
  ],
  providers: [
    { provide: ErrorHandler,
      useClass: IonicErrorHandler,
  }]
})
export class AppModule {}
