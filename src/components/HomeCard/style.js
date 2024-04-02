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
	width: 310px;
	height: 490px;
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
	}

	.favorite-none {
		width: 20px;
		height: 30px;
		cursor: pointer;
		position: relative;
		left: 270px;
	}

	.cart {
		width: 30px;
		height: 30px;
		cursor: pointer;
		position: relative;
	} 

	.flip-card {
		width: 280px;
		height: 350px;
		perspective: 1000px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
	}
	
	img {
		width: 280px;
		height: 370px;
	}

	.flip-card-inner {
		position: relative;
		width: 280px;
		height: 350px;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		background-color: #F6F9F8;
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front, .flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-front {
		height: 350px;
	}

	.flip-card-back {
		height: 350px;
		color: #2D3541;
		transform: rotateY(180deg);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	p {
		margin-top: 20px;
	}

	.content-fav-cart {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.container-price-cart {
		width: 100%;
		text-align: center;
	}

	h3 {
		color: #4D2059;
		line-height: 10px;
		text-align: center;
	}

	h4 {
		text-align: center;
		height: 60px;
		line-height: 80px;
		text-decoration: line-through;
		color: red;
	}
`;