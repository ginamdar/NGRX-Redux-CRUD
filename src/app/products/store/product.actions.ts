import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { IProduct } from '../models/IProduct';

// Load List Products
export const loadProducts = createAction(
  '[Product List Component] Load Products'
);
export const loadProductsSuccess = createAction(
  '[Product List Effect] Load Products Success',
  props<{ products: IProduct[] }>()
);
export const loadProductsFailure = createAction(
  '[Product List Effect] Load Products Failure',
  props<{ error: any }>()
);
// Load Product
export const loadProduct = createAction(
  '[Product Components] Load Product',
  props<{ id: string }>()
);
export const loadProductSuccess = createAction(
  '[Product Effect ] Load Product Success',
  props<{ selectedProduct: IProduct }>()
);
export const loadProductFailure = createAction(
  '[Product Effect ] Load Product Failure',
  props<{ error: any }>()
);

// Add Product
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: IProduct }>()
);

export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',
  props<{ product: IProduct }>()
);

export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failure',
  props<{ error: any }>()
);

// Edit Component
export const updateProduct = createAction(
  '[Product Edit Component] Update Product',
  props<{ product: Update<IProduct> }>()
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);

export const deleteProducts = createAction(
  '[Product/API] Delete Products',
  props<{ ids: string[] }>()
);
