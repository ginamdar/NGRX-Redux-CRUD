import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {IProduct, Product} from '../../models/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import {ProductState} from '../../store/product.reducer';
import * as fromProductActions from '../../store/product.actions';
import {selectedProduct} from '../../store/product.selecter';
import {Update} from '@ngrx/entity/src/models';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<ProductState>
  ) {}
  model: Product;

  ngOnInit() {
    this.store.dispatch(fromProductActions.loadProduct({id: this.route.snapshot.paramMap.get('id')}));
    this.store
      .pipe(
        select(selectedProduct)
      )
      // .subscribe((product) => this.model = product);
      .subscribe((product) => this.model = Object.assign(new Product(), product));
  }

  onSubmit() {
    const update: Update<IProduct> = {
      id: this.model.id,
      changes: this.model
    };
    this.store.dispatch(fromProductActions.updateProduct({product: update}));
  }
}
