import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	cartHome,
	iconFavorite,
	iconFavoriteNone,
} from '../../utils/icons';
import { 
	Container, 
	Card
} 
from './style';

function HomeCard({products}) {

	const dispatch = useDispatch();

	const favoritesQuantity = useSelector(state => state.favorites.data);

	function addProduct(product) {
		const car = JSON.parse(localStorage.getItem('products')) || [];
		const objectSave = [...car, product];
		localStorage.setItem('products', JSON.stringify(objectSave));
		dispatch({ type: 'ADD_PRODUCT', product: objectSave });
	}

	function addFavorite(product) {
		const querifyFavorite = favoritesQuantity.filter(favorite => favorite.id === product.id).length;
		if(querifyFavorite) {
			const favorite = JSON.parse(localStorage.getItem('favorites')) || [];
			const objectSave = favorite.filter(item => item.id !== product.id);
			localStorage.setItem('favorites', JSON.stringify(objectSave));
			dispatch({ type: 'ADD_FAVORITE', favorite: objectSave });
		} else {
			const favorite = JSON.parse(localStorage.getItem('favorites')) || [];
			const objectSave = [...favorite, product];
			localStorage.setItem('favorites', JSON.stringify(objectSave));
			dispatch({ type: 'ADD_FAVORITE', favorite: objectSave });
		}
	}

	return (
		<Container>
			{products.map(product => 
				<Card>
					<div onClick={() => addFavorite(product)}>
						{ favoritesQuantity.filter(favorite => favorite.id === product.id).length ? 
							<img className="favorite-none" src={iconFavorite} alt="Favoritar" />
						: 
							<img className="favorite" src={iconFavoriteNone} alt="Favoritar" />
						}
					</div>
					<div class="flip-card">
						<div class="flip-card-inner">
							<div class="flip-card-front">
								<img src={product.image} alt="Avatar" />
							</div>
							<div class="flip-card-back">
								<h2>{product.product}</h2> 
								<p>{product.description}</p>
							</div>
						</div>
					</div>
					<div className="container-price-cart">
						<h4>R$ {product.oldPrice}</h4>
						<h3>R$ {product.price}</h3>
					</div>
					<div onClick={() => addProduct(product)}>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Card>
			)}
		</Container>
	)
}

export default HomeCard;