window.addEventListener('scroll', function () {
	let content = document.querySelector('.content')
	let contentHeight = content.clientHeight
	let yOffset = window.scrollY
	let windowHeight = window.innerHeight

	if (yOffset + windowHeight >= contentHeight) {
		content.innerHTML +=
			'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, justo eget ullamcorper mollis, metus ante fermentum justo, ut suscipit metus arcu eget nunc. Quisque commodo, justo in tincidunt tristique, urna sapien congue justo, eu vestibulum lorem metus a nunc. Cras tincidunt risus nec libero sagittis, nec tincidunt lacus feugiat. Suspendisse potenti. Donec sit amet u Phasellus in libero vel felis aliquet feugiat ac vitae libero. In hac habitasse platea dictumst. Fusce lacinia, sem eu luctus venenatis, tortor eros tempus mi, et eleifend justo quam ac libero. Proin at neque et velit sodales tristique. Integer luctus mauris et tellus ullamcorper, non vestibulum justo fermentum. Nullam auctor, mauris et condimentum ultrices, leo odio ultricies le Quisque vel mi at magna condimentum fringilla. Sed eget nisi quis arcu luctus ultricies. Sed in enim auctor, tristique libero id, malesuada justo. Quisque id ante vitae mauris convallis fringilla nec eu leo. Curabitur auctor, eros eget fermentum commodo, dui ligula luctus lorem, eget aliquet ligula elit at nunc. Ut id posuere libero. Nunc ac hendrerit eros. Aliquam erat volutpat.</p>'
	}
})
