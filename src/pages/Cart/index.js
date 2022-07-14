import { Divider } from "antd"
import { useEffect, useState } from "react"
import { ContainerProducts, Content, Counter, Price, Product } from "./style"

export function Cart() {

	const [product, setProduct] = useState([])

	useEffect(() => {
		getProducts()
	},[])
	
	function getProducts() {
		const cart = JSON.parse(localStorage.getItem('products')) || []
		setProduct(cart)
	}

	const onChange = (value) => {
		console.log('changed', value)
	}

	return (
		<ContainerProducts>
			{product.map(product =>
				<><Content>
					<div>
						<Product>
							<img src={product.image} alt="Produto" />
							<div className="content-product">
								<h2>{product.product}</h2>
								<h3>{product.description}</h3>
							</div>
						</Product>
						<Counter>
							<input type="number" id="points" name="points" step="1" max="100" min="1" defaultValue="1" />
							<span>EXCLUIR</span>
						</Counter>
						<Price>
							<h2>Total</h2>
							<h3>R$ {product.actual_price.replace(".", ",")}</h3>
						</Price>
					</div>
				</Content><Divider /></>
			)}
		</ContainerProducts>
	)
}