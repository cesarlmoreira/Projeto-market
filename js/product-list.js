const productsGrid = document.getElementById("productsGrid");

async function loadProducts() {
	try {
		const response = await fetch("./data/popular-products.json");

		const products = await response.json();

		renderProducts(products);
	} catch (error) {
		console.error("Erro ao carregar produtos:", error);
	}
}

function renderProducts(products) {
	products.forEach((product) => {
		const productCard = document.createElement("article");

		productCard.classList.add("product-card");

		productCard.innerHTML = `
			<img
				src="${product.image}"
				alt="${product.title}"
				class="product-image"
			/>

			<div class="product-content">

				<h2 class="product-title">
					${product.title}
				</h2>

                <p class="product-description">
                    ${product.description}
                </p>

				<p class="product-price">
					${product.price}
				</p>

				<button class="product-button">
					<a class="product-button__link" target="blank" href="${product.link}">Comprar Agora</a>
				</button>

			</div>
		`;

		productsGrid.appendChild(productCard);
	});
}

loadProducts();
