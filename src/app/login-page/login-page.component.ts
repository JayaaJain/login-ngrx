import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { login } from "../login-page.actions";

@Component({
  selector: "login-page",
  templateUrl: "login-page.component.html"
})
export class LoginPage {
  constructor(private store: Store<{}>) {}

  onSubmit(username: string, password: string) {
    this.store.dispatch(login({ username: username, password: password }));
  }
}
