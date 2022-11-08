document.addEventListener('DOMContentLoaded', () => {
	// Кнопка по которой происходит клик
	let callBackButton = document.getElementById('header__button-call');

	// Модальное окно, которое необходимо открыть
	let modal1 = document.getElementById('header__modal');

	// Кнопка "Закрыть" внутри модального окна
	let closeButton = modal1.getElementsByClassName('modal__close-button');

	// Тег body для запрета прокрутки
	let tagBody = document.getElementsByTagName('body');

		callBackButton.onclick = function (e) {
			e.preventDefault();
			modal1.classList.add('modal__active');
			tagBody.classList.add('.hidden');
		}

		closeButton.onclick = function (e) {
			e.preventDefault();
			modal1.classList.remove('modal__active');
			tagBody.classList.remove('.hidden');
		}

		modal1.onmousedown = function (e) {
			let target = e.target;
			let modalContent = modal1.getElementsByClassName('modal__content');
			if (e.target.closest('.' + modalContent.className) === null) {
				this.classList.remove('modal__active');
				// tagBody.classList.remove('.hidden');
			}};

});


