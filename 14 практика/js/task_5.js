let total = 0;

document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');

    cart.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    cart.addEventListener('drop', function (e) {
        e.preventDefault();

        const item = document.querySelector('.dragging');
        const price = parseFloat(item.getAttribute('data-price'));

        total += price;
        cart.innerHTML = `<p>Итого: $${total.toFixed(2)}</p>`;

        item.classList.remove('dragging');
    });

    document.addEventListener('dragstart', function (e) {
        const item = e.target;
        item.classList.add('dragging');
    });
});