let notificationCounter = 0
let intervalId

function createNotification() {
	const notificationList = document.querySelector('.notification-list')
	const newNotification = document.createElement('p')

	newNotification.classList.add('.notification-item')
	newNotification.textContent = 'Уведомление'

	notificationList.appendChild(newNotification)

	notificationCounter++

	updateCounter()

	newNotification.addEventListener('click', () => {
		clearInterval(intervalId)

		setTimeout(() => {
			intervalId = setInterval(createNotification, 3000)
		}, 10000)
	})
}

function updateCounter() {
	const counter = document.querySelector('#notification_menu_sym')

	counter.textContent = notificationCounter
}

intervalId = setInterval(createNotification, 3000)
