import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ProductList() {
	const [state, dispatch] = useStoreContext();

	const { currentCategory } = state;

	const { loading, data } = useQuery(QUERY_PRODUCTS);

	useEffect(() => {
		if (data) {
			dispatch({
				type: UPDATE_PRODUCTS,
				products: data.products,
			});
			data.products.forEach((product) => {
				idbPromise('products', 'put', product);
			});
		}
		e;
	});
}
