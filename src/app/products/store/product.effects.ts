import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import {ProductService} from '../services/product.service';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

}
