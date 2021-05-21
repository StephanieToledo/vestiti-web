import styled from 'styled-components';

export const Container = styled.div`
	max-width: 95%;
	height: auto;
	margin-bottom: 2em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 1em;
	margin-left: 2.5%;
	background-color: #FCFCFC;
`;

export const Card = styled.div`
	width: 17em;
	height: 450px;
	border: 1px solid;
	border-color: #BFBFBF;
	margin-top: 1em;
	margin-bottom: 1em;
	margin: 0.6em;
`;

export const Image = styled.div`
	width: inherit;
	height: 330px;

	.image {
		width: 15em;
		height: 300px;
		padding-top: 0.7em;
		margin-left: 1rem;
		cursor: pointer;
	}

	.image:hover {
		transition: 1s;
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
		transform: scale(1.1);
	}

	.favorite {
		width: 8%;
		height: 25px;
		float: right;
		margin-right: 0.6em;
		margin-top: 0.4em;
		cursor: pointer;
	}

	.container-price-cart {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
	}

	h3 {
		width: 100px;
		max-width: auto;
		height: 30px;
		margin: auto;
		margin-left: 5.1em;
		margin-top: 2em;
		color: #4D2059;
	}

	.cart {
		width: 2em;
		height: 30px;
		margin-right: 10px;
		margin-top: 3.5em;
		cursor: pointer;
	}
`;