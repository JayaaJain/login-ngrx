import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { LoginPage } from "./login-page/login-page.component"
@NgModule({
  declarations: [AppComponent, LoginPage],
  imports: [BrowserModule, StoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}