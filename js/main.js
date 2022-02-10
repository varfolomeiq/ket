$(document).ready(function () {
	$(".header__burger").click(function (event) {
		$(".header__burger,.header__menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
});


function openDev(evt, devName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(devName).style.display = "block";
	evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$(document).ready(function () {
	var show = true;
	var countbox = ".statistics";
	$(window).on("scroll load resize", function () {
		if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height(); // Высота окна браузера
		var d_height = $(document).height(); // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if (
			w_top + 500 >= e_top ||
			w_height + w_top == d_height ||
			e_height + e_top < w_height
		) {
			$(".statistics__number").css("opacity", "1");
			$(".statistics__number").spincrement({
				thousandSeparator: "",
				duration: 2000,
			});

			show = false;
		}
	});
});

function openCity(evt, cityName) {
	var i, tabcontents, rab;
	tabcontents = document.getElementsByClassName("tabcontents");
	for (i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = "none";
	}
	rab = document.getElementsByClassName("rab");
	for (i = 0; i < rab.length; i++) {
		rab[i].className = rab[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}



$('.voice-message__slider').slick({
	autoplay: true,
});

$('.portfolio__slider').slick({
	autoplay: true,
	centerMode: true,
	infinite: true,
	centerPadding: '85px',
	slidesToShow: 3,
	arrows: false,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '50px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1
			}
		}
	]
});