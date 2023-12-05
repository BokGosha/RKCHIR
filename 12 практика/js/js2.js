function createList() {
	const list = document.getElementById('list')

	while (true) {
		let listItemContent = prompt('Введите уведомление:')

		if (!listItemContent && list.childNodes.length === 0) {
			let noItemsMessage = document.createElement('li')
			noItemsMessage.textContent = 'Ничего не введено'
			list.appendChild(noItemsMessage)

			break
		} else if (!listItemContent) {
			break
		}

		let listItem = document.createElement('li')
		listItem.textContent = listItemContent
		list.appendChild(listItem)

		if (
			list.childNodes.length === 1 &&
			list.firstChild.textContent === 'Ничего не введено'
		) {
			list.removeChild(list.firstChild)
		}
	}
}

let but = document.querySelector('.add')

but.addEventListener('click', () => {
	createList()
})

createList()
