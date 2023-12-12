let links = document.getElementById('contents')

links.onclick = function(e) {
    let target = e.target

    if (target.closest('.link')) {
        let answer = confirm('Вы точно хотите перейти по этой ссылке?')

        if (!answer) {
            return false
        }
    }
}