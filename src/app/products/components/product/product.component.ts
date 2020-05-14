import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/IProduct';
import {select, Store} from '@ngrx/store';
import {ProductState} from '../../store/product.reducer';
import * as fromProductActions from '../../store/product.actions';
import {selectedProduct} from '../../store/product.selecter';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<IProduct>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromProductActions.loadProduct({id: this.route.snapshot.paramMap.get('id')}));
    this.product$ = this.store
      .pipe(
        select(selectedProduct)
      );
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log('Product Deleted');
        this.router.navigate(['/product/list']);
      },
      error: err => console.error(err)
    };
    // this.service.deleteProduct(id).subscribe(productsObserver);
  }
}
