function ShowNotification(options) {
	const notification = document.getElementById('notification')

	notification.textContent = options.content
	notification.classList.add('notification')
	notification.style.display = 'block'

	setTimeout(function () {
		notification.style.display = 'none'
		notification.textContent = ''
		notification.classList.remove('notification')
	}, 1500)
}
ShowNotification({ content: 'Вам уведомление!' })
