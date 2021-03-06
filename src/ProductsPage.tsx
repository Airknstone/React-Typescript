import React from 'react';
import { IProduct, products } from './ProductsData';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface IState {
  products: IProduct[];
  search: string;
}
class ProductsPage extends React.Component<RouteComponentProps, IState> {
  public constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      products: [],
      search: '',
    };
  }
  public componentDidMount() {
    this.setState({ products });
  }

  public static getDerivedStateFromProps(
    props: RouteComponentProps,
    state: IState
  ) {
    const searchParams = new URLSearchParams(props.history.location.search);
    const search = searchParams.get('search') || '';
    return {
      products: state.products,
      search,
    };
  }

  public render() {
    return (
      <div className='page-container'>
        <p>Welcome to ReactShop where you can get all your tools for React</p>
        <ul className='product-list'>
          {this.state.products.map((product) => {
            if (
              !this.state.search ||
              (this.state.search &&
                product.name
                  .toLowerCase()
                  .indexOf(this.state.search.toLowerCase()) > -1)
            ) {
              return (
                <li className='product-list-item' key={product.id}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  }
}
export default ProductsPage;
