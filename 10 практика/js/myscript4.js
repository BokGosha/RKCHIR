function getRandIndex() {
	return Math.floor(Math.random() * maxLength)
}

let data
let canvas = document.getElementById('canvas')
let pen = canvas.getContext('2d')
let captch
let myButton = document.getElementById('myButton')

function getCaptcha() {
	captch = Math.random().toString(36).substring(2, 8)

	pen.font = '30px Georgia'
	pen.fillStyle = 'white'
	pen.fillRect(0, 0, 400, 400)
	pen.fillStyle = 'green'

	maxLength = captch.length
	index1 = getRandIndex(maxLength)
	index2 = getRandIndex(maxLength)

	captch =
		captch.substring(0, index1 - 1) +
		captch[index1].toUpperCase() +
		captch.substring(index1 + 1, maxLength)

	captch =
		captch.substring(0, index2 - 1) +
		captch[index2].toUpperCase() +
		captch.substring(index2 + 1, maxLength)

	data = captch

	captch = captch.split('').join(' ')

	pen.fillText(captch, 40, 40)
}

function getSum() {
	pen.font = '30px Georgia'
	pen.fillStyle = 'white'
	pen.fillRect(0, 0, 400, 400)
	pen.fillStyle = 'green'

	let m = Math.floor(Math.random() * 100)
	let n = Math.floor(Math.random() * 100)

	data = m + n

	captch = m + ' + ' + n

	pen.fillText(captch, 40, 40)
}

function isEmpty(object) {
	if (object == '') {
		return true
	}

	return false
}

function checkIt() {
	typedData = document.getElementById('typedText').value

	if (isEmpty(typedData)) {
		alert('Вы ничего не ввели.')
	} else {
		if (typedData == data) {
			myButton.disabled = false
			getCaptcha()
			document.getElementById('typedText').value = ''
		} else {
			alert('Неверно.')
			document.getElementById('typedText').value = ''
			getSum()
		}
	}
}
