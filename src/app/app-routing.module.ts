import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GolflinkComponent } from './golflink/golflink.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo:"/homepage"},
  {path: "homepage",component:HomepageComponent },
  {path: "gallery",component:GalleryComponent},
  {path: "golflink",component:GolflinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
