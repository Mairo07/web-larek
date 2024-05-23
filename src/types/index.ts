export interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'софт-скил' | 'хард-скил' | 'кнопка' | 'дополнительное' | 'другое';
  price: number | null
}

export interface IOrder {
  payment: 'cash' | 'card';
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
  setOrderInfo(orderInfo: TOrderInfo): void;
  setUserInfo(userData: TUserInfo): void
  setBasketInfo(basket: IBasketData): void;
  checkValidation(data: Record<keyof TUserInfo, string> | Record<keyof TOrderInfo, string>): boolean;
}

export interface IProductsData {
  products: IProduct[];
  setProducts(products: IProduct[]): void;
  getProduct(productId: string): IProduct;
}

export interface IBasketData {
  items: TBasketProduct[];
  total: number;
  addItem(product: IProduct): void;
  removeItem(product: IProduct): void;
  setTotal():void;
}

export type TBasketProduct = Pick<IProduct, 'title' | 'price' | 'id'>;

export type TOrderInfo = Pick<IOrder, 'payment' | 'address'>;

export type TUserInfo = Pick<IOrder, 'email' | 'phone'>;



