import React from 'react';
import { useDispatch } from 'react-redux';
import {
	cartHome,
	iconFavoriteNove,
} from '../../utils/icons';
import { 
	Container, 
	Card,
	Image } 
from './style';

function HomeCard({products}) {

	const dispatch = useDispatch();

	function addProduct(product) {
		const car = JSON.parse(localStorage.getItem('products')) || [];
		const objectSave = [...car, product];
		localStorage.setItem('products', JSON.stringify(objectSave));
		dispatch({ type: 'ADD_PRODUCT', product: objectSave });
	}

	return (
		<Container>
				{products.map(product => 
					<Card>
						<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
						<Image>
							<img className="image" id="img" src={product.image} alt="Calça Jeans" />
							<div className="container-price-cart">
								<h4>R$ {product.oldPrice}</h4>
								<h3>R$ {product.price}</h3>
							</div>
						</Image>
						<div onClick={() => addProduct(product)}>
							<img className="cart" src={cartHome} alt="Carrinho" />
						</div>
					</Card>
				)}
		</Container>
	)
}

export default HomeCard;