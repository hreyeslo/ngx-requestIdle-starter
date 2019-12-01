import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { RequestIdlePreloadAllModules } from "ngx-request-idle";

const routes: Routes = [
  {
    path: "",
    redirectTo: "module-1",
    pathMatch: "full"
  },
  {
    path: "module-1",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/module-1/module-1.module").then(
            m => m.Module1Module
          )
      },
      {
        path: "module-2",
        loadChildren: () =>
          import("./modules/module-2/module-2.module").then(
            m => m.Module2Module
          )
      }
    ]
  },
  {
    path: "module-3",
    loadChildren: () =>
      import("./modules/module-3/module-3.module").then(m => m.Module3Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Custom strategy to improve performance when loading lazy-load modules
      preloadingStrategy: RequestIdlePreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
