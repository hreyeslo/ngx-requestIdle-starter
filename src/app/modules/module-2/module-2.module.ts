import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component2Component } from "./component-2/component-2.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: Component2Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Component2Component]
})
export class Module2Module {}
