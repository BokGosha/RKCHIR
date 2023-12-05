document.addEventListener('DOMContentLoaded', function () {
	let container = document.getElementById('container')
	let image = document.getElementById('image')

	let containerRect = container.getBoundingClientRect()

	let centerX = Math.floor(
		containerRect.left + containerRect.width / 2 - image.width / 2
	)

	let centerY = Math.floor(
		containerRect.top + containerRect.height / 2 - image.height / 2
	)

	image.style.position = 'absolute'
	image.style.left = centerX + 'px'
	image.style.top = centerY + 'px'

	container.addEventListener('click', function (event) {
		let x = event.clientX
		let y = event.clientY
		alert('Координаты клика: x = ' + x + ', y = ' + y)
	})
})
