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

		productCard.setAttribute("itemscope", "");
		productCard.setAttribute("itemtype", "https://schema.org/Product");

		productCard.innerHTML = `
			<img
				src="${product.image}"
				alt="${product.title} - imagem do produto"
				class="product-image"
				loading="lazy"
				itemprop="image"
				width="400"
				height="400"
			/>

			<div class="product-content">

				<h2
					class="product-title"
					itemprop="name"
				>
					${product.title}
				</h2>

				<p
					class="product-description"
					itemprop="description"
				>
					${product.description}
				</p>

				<div
					class="product-offer"
					itemprop="offers"
					itemscope
					itemtype="https://schema.org/Offer"
				>

					<meta
						itemprop="priceCurrency"
						content="BRL"
					/>

					<meta
						itemprop="availability"
						content="https://schema.org/InStock"
					/>

					<p
						class="product-price"
						itemprop="price"
						content="${product.price.replace(/[^0-9,]/g, "").replace(",", ".")}"
					>
						${product.price}
					</p>

				</div>

				<a
					class="product-button"
					href="${product.link}"
					target="_blank"
					rel="noopener sponsored"
					aria-label="Comprar ${product.title}"
					itemprop="url"
				>
					Comprar Agora
				</a>

			</div>
		`;

		productsGrid.appendChild(productCard);
	});
}

loadProducts();
