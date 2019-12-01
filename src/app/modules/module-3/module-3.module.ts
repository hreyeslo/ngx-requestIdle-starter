import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component3Component } from "./component-3/component-3.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: Component3Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Component3Component]
})
export class Module3Module {}
