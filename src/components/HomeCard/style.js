import styled from 'styled-components';

export const Container = styled.div`
	width: 95%;
	height: 500px;
	margin-bottom: 1em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 1em;
	margin-left: 2.5%;
	background-color: #F3F3F5;
`;

export const Card = styled.div`
	width: 20em;
	height: 450px;
	border: 1px solid;
`;

export const Image = styled.div`
	width: inherit;
	height: 330px;

	.image {
		width: 15em;
		height: 280px;
	}

	.favorite {
		width: 30px;
		height: 30px;
		float: right;
		margin-right: 1em;
		margin-top: 1em;
	}
`;