import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'
@Component({
    // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // providers: [ProductService] //this is how to use the component injector
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List"
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    // listFilter: string = 'cart';
    _listFilter: string;
    errMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filtredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    filtredProducts: IProduct[];
    products: IProduct[] = [];
    //products was put here before`

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    constructor(private productService: ProductService) {// when the class is constructed, angular injector set the productService parameter
        //dependency injection happens in constructor, not for code that takes time to execute
        // this.filtredProducts = this.products;
        // this.listFilter = 'cart';
    }

    // performFilter(filterBy: string): IProduct[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.products.filter((product: IProduct) => 
    //         product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    // }
    
    performFilter(f: string): IProduct[] {
        f = f.toLowerCase();
        let Prod =  []
        this.products.map((pro) => {
            if (pro.productName.toLowerCase().includes(f)) {
                Prod.push(pro);
            }
        })
        return Prod;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' +  message;
    }

    ngOnInit(): void {
        console.log('On Init');
        // console.log(this.productService.getProducts())
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products
                this.filtredProducts = this.products;
            },
            error: err => this.errMessage = err,
            //complete      //also takes complete and closed function
        });
    }

    

}