//imports the component decorator from angular core
import {Component} from '@angular/core'
import {ProductService} from './product.service'

@Component({
    //selector: puts the component in a custom "products" tag
    selector: 'products',
    //template: the html (or file) to inject
    template: 
    `<h2>Products</h2>
    <ul>
        <li *ngFor="let product of products">
            {{product}}
        </li>
    </ul>`
})
export class ProductsComponent {
    products;

    //product service is injected into the constructor
    constructor (productService : ProductService) {
        this.products = productService.getProducts();
    }
}