import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import {ProductState} from '../../store/product.reducer';
import * as fromProductActions from '../../store/product.actions';
import {selectProducts} from '../../store/product.selecter';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(private store: Store<ProductState>, public router: Router) {}

  ngOnInit() {
    this.store.dispatch(fromProductActions.loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.store
        .pipe(
          select(selectProducts)
        );
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromProductActions.deleteProduct({id}));
  }
}
