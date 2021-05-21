import styled from 'styled-components';

export const Container = styled.div`
	width: 95%;
	height: 350px;
	margin-bottom: 1em;
	display: flex;
	align-items: center;
	justify-content: space-between;    
	margin-top: 5em;
	margin-left: 2.5%;
	background-color: #F3F3F5;
`;

export const ContainerCard = styled.div`
	width: 100%;
	height: inherit;
	background: 
	-webkit-linear-gradient(rgba(245,235,255),rgba(255,255,255,0.2) 0%), 
	-webkit-linear-gradient(-55deg,rgb(233 225 241 / 90%) 50%,rgb(251 251 251) 0%);
	display: flex;
	justify-content: space-around;

	.card-right {
		width: 27%;
		height: 325px;
		margin-right: 35%;
		margin-top: 1.3%;
	}

	.card-left {
		width: 27%;
		height: 325px;
		margin-top: 1.3%;
		margin-left: 5%;
	}

	.card-right:hover {
		transition: 0.6s;
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
		transform: scale(1.1);
		cursor: pointer;
	}

	.card-left:hover {
		transition: 0.6s;
		-webkit-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-o-transform: scale(1.1);
		-ms-transform: scale(1.1);
		transform: scale(1.1);
		cursor: pointer;
	}

	img {
		width: 19.6em;
		height: 14em;
	}

	h2 {
		padding-top: 12%;
		text-align: center;
		color: #4D2059;
		letter-spacing: 0.2rem;
	}
`;
