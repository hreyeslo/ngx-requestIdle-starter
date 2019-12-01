import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RequestIdleModule } from "ngx-request-idle";
import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RequestIdleModule.forRoot() // Import this for use ngx-request-idle utilities
    // RequestIdleModule.forChild() // You can use forChild for lazy modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
