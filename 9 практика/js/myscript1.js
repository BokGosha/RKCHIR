let result = prompt('Введите логин', '')

if (result == 'Админ') {
	let password = prompt('Введите пароль', '')

	if (password == 'Я главный') {
		alert('Здравствуйте!')
	} else if (password == null) {
		alert('Отменено')
	} else {
		alert('Неверный пароль')
	}
} else if (result == null || result == '') {
	alert('Отменено')
} else {
	alert('Я вас не знаю')
}
