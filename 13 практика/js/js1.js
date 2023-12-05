let notificationCounter = 0
let intervalId

function createNotification() {
	const notificationList = document.querySelector('.notification-list')
	const newNotification = document.createElement('p')

	newNotification.classList.add('notification-item')
	newNotification.textContent = 'Уведомление'

	const button = document.createElement('button')
	const image = document.createElement('img')

	image.src = 'images/free-icon-close-4013407.png'

	button.appendChild(image)

	notificationCounter++

	updateCounter()

	button.addEventListener('click', () => {
		let par = button.parentElement
		par.style.display = 'none'

		notificationCounter--

		updateCounter()
	})

	newNotification.appendChild(button)

	notificationList.appendChild(newNotification)

	newNotification.addEventListener('click', () => {
		clearInterval(intervalId)

		setTimeout(() => {
			intervalId = setInterval(createNotification, 3000)
		}, 10000)
	})
}

function updateCounter() {
	const counter = document.querySelector('#notification_menu_sym')

	if (notificationCounter == 0) {
		counter.textContent = ''
	} else {
		counter.textContent = notificationCounter
	}
}

intervalId = setInterval(createNotification, 3000)
