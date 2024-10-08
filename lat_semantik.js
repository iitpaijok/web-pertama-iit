document.getElementById("identityForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    const result = `
        <h2>terdaftar:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nomor Telepon:</strong> ${phone}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    `;

    document.getElementById("result").innerHTML = result;
});

    // Array untuk menyimpan produk
    const products = [
        { id: 1, name: "mia khalifah", price: 350000 },
        { id: 2, name: "sugiono", price: 180000 },
        { id: 3, name: "ariel tatum", price: 630000 },
        { id: 4, name: "lucinta luna", price: 400000 },
        { id: 5, name: "nikita mirzani", price: 500000 },
        { id: 6, name: "jeje", price: 250000 },
    ];

    // Keranjang belanja
    let cart = [];

    // Fungsi untuk menambah produk ke keranjang
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            alert(`${product.name} telah ditambahkan ke keranjang!`);
            updateCart();
        }
    }

    // Fungsi untuk menghitung total harga
    function calculateTotal() {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    // Fungsi untuk memperbarui tampilan keranjang
    function updateCart() {
        const cartContainer = document.getElementById("cart");
        cartContainer.innerHTML = ""; // Bersihkan keranjang

        cart.forEach(product => {
            const item = document.createElement("div");
            item.textContent = `${product.name} - Rp ${product.price}`;
            cartContainer.appendChild(item);
        });

        const total = document.createElement("div");
        total.textContent = `Total: Rp ${calculateTotal()}`;
        cartContainer.appendChild(total);
    }