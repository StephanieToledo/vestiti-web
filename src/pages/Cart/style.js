import styled from 'styled-components';

export const ContainerProducts = styled.div`
	width: 800px;
	height: 600px;
	margin-left: 60px;
	margin-top: 20px;
	background-color: #FBFBFC;

`
export const Content = styled.div`
	width: 100%;
	height: 270px;

	div {
		display: flex;
		justify-content: space-between;
	}
	
	margin-bottom: 30px;
`
export const Product = styled.div`
	width: 500px;
	display: flex;
	margin-top: 10px;
	margin-left: 10px;

	img {
		width: 200px;
		height: 250px;
	}

	.content-product {
		width: 320px;
		height: auto;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		margin-left: 10px;
	}

	h3 {
		margin-top: 40px;
	}
`
export const Counter = styled.div`
	width: 150px;
	height: 250px;
	display: flex;
	align-items: center;
	flex-direction: column;

	input {
		width: 60px;
		border-radius: 20px;
		text-align: center;
		margin: auto;
		padding-left: 10px;
		border: 0.5px solid #B0B0B0;
	}

	span {
		cursor: pointer;
	}
`
export const Price = styled.div`
	width: 140px;
	height: 250px;
	display: flex;
	align-items: center;
	flex-direction: column;

	h2 {
		margin-top: 10px;
		font-weight: bold;
	}

	h3 {
		margin: auto;
		font-size: 18px;
		font-weight: bold;
	}
`