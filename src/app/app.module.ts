import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
// import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component'
import { RouterModule } from '@angular/router';
// import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({ //the properies are arrays
  declarations: [  //these is where all the components got declared
    AppComponent,
    // ProductListComponent, ConvertToSpacesPipe,
    //  StarComponent,
    //  ProductDetailComponent,    //star component not compulsory
    WelcomeComponent
  ],
  imports: [    //can be use to import another angular module
    BrowserModule,     //Browser Module import ngFor and ngIf directives
    FormsModule,  //forms module import ngmodel directives
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
      // { path: 'products', component: ProductListComponent },
      // { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])

  ],
  bootstrap: [AppComponent] //start up component

})
export class AppModule { }
