import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
// import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
// import { StarComponent } from '../shared/star.component';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
// import { WelcomeComponent } from '../home/welcome.component';
import { SharedModule } from '../shared/shared.module'



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    // ConvertToSpacesPipe,
    // StarComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule.forChild([ //don't re-register the router services
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      // { path: 'welcome', component: WelcomeComponent },
      // { path: "", redirectTo: "welcome", pathMatch: "full" },
      // { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
