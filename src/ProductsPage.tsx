import React from 'react';
import { IProduct, products } from './ProductsData';
import { Link } from 'react-router-dom';

interface IState {
  products: IProduct[];
}
class ProductsPage extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
    };
  }
  public componentDidMount() {
    this.setState({ products });
  }

  public render() {
    return (
      <div className='page-container'>
        <p>Welcome to ReactShop where you can get all your tools for React</p>
        <ul className='product-list'>
          {this.state.products.map((product) => (
            <li className='product-list-item' key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductsPage;
