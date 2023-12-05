let basketItems = localStorage.getItem('basketItems')
	? JSON.parse(localStorage.getItem('basketItems'))
	: {}

let basketItemsContainer = document.getElementById('basketItems')

Object.keys(basketItems).forEach(function (thingId) {
	let itemHtml = createBasketItemHtml(thingId, basketItems[thingId])
	basketItemsContainer.insertAdjacentHTML('beforeend', itemHtml)
})

function createBasketItemHtml(thingId, col) {
	let cost = 0

	switch (parseInt(thingId)) {
		case 1:
			cost = 1280
			break
		case 2:
			cost = 1320
			break
		case 3:
			cost = 1450
			break
		case 4:
			cost = 1370
			break
		case 5:
			cost = 1920
			break
		case 6:
			cost = 2430
			break
		case 7:
			cost = 1800
			break
		case 8:
			cost = 1230
			break
		default:
			cost = 0
			break
	}

	let itemHtml = `
            <div class="thing" data-item="${parseInt(thingId)}">
            <img src="images/${parseInt(thingId)}.jpg">

            <div class="des">
                <p><span class="cost">${
									parseInt(cost) * col
								}</span> р. <span id="col">${col}</span> шт.</p>

                <button class="delete">Удалить</button>

                <div class="imgs">
                        <button><img class="plus" src="images/plus.png"></button>
                        <button><img class="min" src="images/minus.png"></button>
                </div>
            </div>
        </div>
    `

	return itemHtml
}

let plusButtons = document.querySelectorAll('.plus')

let minusButtons = document.querySelectorAll('.min')

let colSpans = document.querySelectorAll('#col')

let costSpans = document.querySelectorAll('.cost')

let costAll = document.querySelector('.costAll')

updateCost()

plusButtons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let thingId = this.closest('.thing').getAttribute('data-item')

		let count = parseInt(colSpans[index].innerText)

		if (count >= 1) {
			costSpans[index].innerText =
				(costSpans[index].innerText / count) * (count + 1)
		}

		colSpans[index].innerText = count + 1

		localStorage.setItem('col_' + index, colSpans[index].innerText)

		addToCart(thingId)

		updateCost()
	})
})

minusButtons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let thingId = this.closest('.thing').getAttribute('data-item')

		let count = parseInt(colSpans[index].innerText)

		if (count > 0) {
			costSpans[index].innerText =
				(costSpans[index].innerText / count) * (count - 1)

			colSpans[index].innerText = count - 1

			localStorage.setItem('col_' + index, colSpans[index].innerText)

			removeFromCart(thingId)

			updateCost()
		}
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
			let element = document.querySelector(`[data-item="${thingId}"]`)

			if (element) {
				element.style.display = 'none'
			}

			delete basketItems[thingId]
		}
	}

	localStorage.setItem('basketItems', JSON.stringify(basketItems))
}

function updateCost() {
	let count = 0

	for (let i = 0; i < costSpans.length; i++) {
		console.log(costSpans[i].innerText)
		count += parseInt(costSpans[i].innerText)
	}

	costAll.querySelector('span').innerText = count

	count = 0
}

deleteButtons = document.querySelectorAll('.delete')

deleteButtons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let thingId = this.closest('.thing').getAttribute('data-item')

		remove(thingId)

		costSpans[index].innerText = 0

		updateCost()
	})
})

function remove(thingId) {
	let element = document.querySelector(`[data-item="${thingId}"]`)
	if (element) {
		element.style.display = 'none'
	}

	delete basketItems[thingId]

	localStorage.setItem('basketItems', JSON.stringify(basketItems))
}
