let plusButtons = document.querySelectorAll('.plus')

let minusButtons = document.querySelectorAll('.min')

let costSpans = document.querySelectorAll('.cost')

let basketItems = localStorage.getItem('basketItems')
	? JSON.parse(localStorage.getItem('basketItems'))
	: {}

plusButtons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let thingId = this.closest('.thing').getAttribute('data-item')

		addToCart(thingId)
	})
})

minusButtons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let thingId = this.closest('.thing').getAttribute('data-item')

		removeFromCart(thingId)
	})
})

function addToCart(thingId) {
	if (basketItems[thingId]) {
		basketItems[thingId]++
	} else {
		basketItems[thingId] = 1
	}

	localStorage.setItem('basketItems', JSON.stringify(basketItems))
}

function removeFromCart(thingId) {
	if (basketItems[thingId]) {
		basketItems[thingId]--
		if (basketItems[thingId] === 0) {
			delete basketItems[thingId]
		}
	}

	localStorage.setItem('basketItems', JSON.stringify(basketItems))
}
