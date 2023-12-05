let checkboxes = document.querySelectorAll('.costUl input[type="checkbox"]')

let filteredItems = []

let things = document.querySelectorAll('.thing')

checkboxes.forEach(function (checkbox) {
	checkbox.addEventListener('change', function () {
		filterItems()
		saveFilterState()
	})
})

function filterItems() {
	filteredItems = []

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			let value1 = parseFloat(checkbox.getAttribute('value1'))
			let value2 = parseFloat(checkbox.getAttribute('value2'))

			things.forEach(function (thing) {
				let cost = parseFloat(thing.querySelector('.cost').innerText)
				let shouldInclude = true

				if (value1 && value2) {
					if (cost >= value1 && cost <= value2) {
						shouldInclude = true
					} else {
						shouldInclude = false
					}
				} else if (value1 && !value2) {
					if (cost >= value1) {
						shouldInclude = true
					} else {
						shouldInclude = false
					}
				} else if (!value1) {
					shouldInclude = true
				}

				if (shouldInclude) {
					filteredItems.push(thing)
				}
			})
		}
	})

	things.forEach(function (thing) {
		if (!filteredItems.includes(thing)) {
			thing.style.display = 'none'
		} else {
			thing.style.display = 'flex'
		}
	})
}

function saveFilterState() {
	let filterState = []

	checkboxes.forEach(function (checkbox) {
		filterState.push(checkbox.checked)
	})

	localStorage.setItem('filterState', JSON.stringify(filterState))
}

function restoreFilterState() {
	let filterState = JSON.parse(localStorage.getItem('filterState'))

	if (filterState) {
		checkboxes.forEach(function (checkbox, index) {
			checkbox.checked = filterState[index]
		})

		filterItems()
	}
}

restoreFilterState()

checkboxes.forEach(function (checkbox) {
	checkbox.addEventListener('change', function () {
		let checked = false

		checkboxes.forEach(function (checkbox) {
			if (checkbox.checked) {
				checked = true
			}
		})

		if (!checked) {
			things.forEach(function (thing) {
				thing.style.display = ''
			})

			filteredItems = []

			localStorage.removeItem('filterState')
		}
	})
})
