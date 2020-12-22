// include('libs/isotope.pkgd.min.js');
// include('libs/imagesloaded.pkgd.min.js');
// include('libs/nouislider.min.js');
// include('libs/jquery.inputmask.min.js');
// include('libs/wNumb.min.js');
// include('libs/slick.min.js');;
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});;
function ibg(){
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();;
// include('dynamic.js');
// include('animOnScroll.js');;
$(document).ready(function(){
	function openBurger() {
		let btn = $(".header__burger");
		let menu = $(".menu-header");
		let area = $(".menu-header__area");
		btn.click(activeBurger);
		area.click(activeBurger);
		function activeBurger() {
			btn.toggleClass("_active");
			menu.toggleClass("_active");
			$("body").toggleClass("_lock")
		};
	};
	openBurger();
	$(".main__btn").click(function() {
		$("html,body").animate({
			scrollTop: $(".about").offset().top
		}, 1000);
	});
	function updateFooterYear() {
		let fullDate = new Date();
		let nowYear = fullDate.getFullYear();
		$("#thisyear").html(nowYear);
	};
	updateFooterYear();
})