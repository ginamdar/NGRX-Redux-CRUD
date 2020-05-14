import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {ProductService} from '../services/product.service';
import * as fromProductActions from './product.actions';
import {catchError, concatMap, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService, private router: Router) {}

  createProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(fromProductActions.addProduct),
        mergeMap(action =>
            this.productService.createProduct(action.product)
              .pipe(
                map((product) => fromProductActions.addProductSuccess({ product })),
                catchError((error) => of(fromProductActions.addProductFailure({ error })))
              )
            ),
        tap(() => this.router.navigate(['/product/list']))
      );
  });

  updateProduct$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(fromProductActions.updateProduct),
        concatMap(action =>
            this.productService.editProduct(
              action.product.id,
              action.product.changes
            )
        ),
        tap(() => this.router.navigate(['/product/list']))
      ),
      {dispatch: false}
  );



  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(fromProductActions.loadProducts),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(
          products => fromProductActions.loadProductsSuccess({products})
        ),
        catchError((err) => of(fromProductActions.loadProductsFailure({error: err})))
      ))
    )
  );

  loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(fromProductActions.loadProduct),
    mergeMap((action) => this.productService.getProduct(action.id)
      .pipe(
        map(
          product => fromProductActions.loadProductSuccess({selectedProduct: product})
        ),
        catchError((err) => of(fromProductActions.loadProductFailure({error: err})))
      ))
    )
  );

}
