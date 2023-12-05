let sortSelect = document.querySelector('select[name="sort"]')

let things = document.querySelectorAll('.thing')

sortSelect.value = localStorage.getItem('sort')

sortSelect.addEventListener('change', function () {
	let selectedOption = sortSelect.value

	if (selectedOption === 'up') {
		sortThingsByPriceUp()
	} else if (selectedOption === 'down') {
		sortThingsByPriceDown()
	} else {
		resetSorting()
	}

	localStorage.setItem('sort', selectedOption)
})

if (sortSelect.value === 'up') {
	sortThingsByPriceUp()
} else if (sortSelect.value === 'down') {
	sortThingsByPriceDown()
}

function sortThingsByPriceUp() {
	things.forEach(function (thing) {
		thing.style.order = thing.querySelector('.cost').innerText
	})
}

function sortThingsByPriceDown() {
	things.forEach(function (thing) {
		thing.style.order = -thing.querySelector('.cost').innerText
	})
}

function resetSorting() {
	things.forEach(function (thing, index) {
		thing.style.order = index
	})
}
