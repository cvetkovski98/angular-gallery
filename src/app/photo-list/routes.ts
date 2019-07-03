import { PhotoListComponent } from "./photo-list.component";
import { PhotoDetailComponent } from "./photo-detail.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "gallery", component: PhotoListComponent },
  { path: "gallery/:id", component: PhotoDetailComponent },
  { path: "", redirectTo: "/gallery", pathMatch: "full" }
];
