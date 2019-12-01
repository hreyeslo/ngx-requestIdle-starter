import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component1Component } from "./component-1/component-1.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: Component1Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [Component1Component]
})
export class Module1Module {}
