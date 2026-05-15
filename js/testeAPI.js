async function getProducts() {
	const response = await fetch("https://fakestoreapi.com/products");

	const products = await response.json();

	const container = document.getElementById("products");

	products.forEach((product) => {
		container.innerHTML += `
          <div class="card">
            <img src="${product.image}" alt="${product.title}" />

            <div class="title">
              ${product.title}
            </div>

            <div class="price">
              R$ ${product.price}
            </div>
          </div>
        `;
	});
}

getProducts();
