import styled from 'styled-components';

export const Container = styled.div`
	max-width: 90%;
	height: auto;
	margin-bottom: 2em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 1em;
	margin-left: auto;
	margin-right: auto;
	background-color: #FCFCFC;
`;

export const Card = styled.div`
	width: 300px;
	height: 470px;
	border: 1px solid;
	border-color: #BFBFBF;
	margin-top: 1em;
	margin-bottom: 1em;

	.favorite {
		width: 20px;
		height: 23px;
		cursor: pointer;
		position: relative;
		left: 270px;
		top: 10px;
	}

	.favoriteNone {
		width: 20px;
		height: 23px;
		cursor: pointer;
		position: relative;
		left: 270px;
		top: 10px;
	}

	.cart {
		width: 30px;
		height: 30px;
		cursor: pointer;
		position: relative;
		left: 260px;
	} 
`;

export const Image = styled.div`
	width: inherit;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	.image {
		width: 250px;
		height: 330px;
		margin-top: 40px;
		cursor: pointer;
		:hover {
			transition: 1s;
			transform: scale(1.05);
		}
	}

	.container-price-cart {
		width: 100%;
		height: 150px;
		text-align: center;
	}

	h3 {
		color: #4D2059;
		text-align: center;
	}

	h4 {
		text-align: center;
		height: 60px;
		line-height: 60px;
		text-decoration: line-through;
		color: red;
	}
`;