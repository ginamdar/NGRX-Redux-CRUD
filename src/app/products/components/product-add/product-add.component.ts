import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import {select, Store} from '@ngrx/store';
import * as fromProductActions from '../../store/product.actions';
import {ProductState} from '../../store/product.reducer';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  constructor(private productService: ProductService, private store: Store<ProductState>) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.store.dispatch(fromProductActions.addProduct({product: f.value}));
  }
}
