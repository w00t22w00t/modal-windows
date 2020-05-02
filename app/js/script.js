'usestrict'
window.addEventListener('DOMContentLoaded', function(){
	let options = [
		{title: 'Modal #1', mainText: 'Lorem ipsum dolor sit amet.', width: ''},
		{title: 'Modal #2', mainText: 'Lorem ipsum dolor sit amet, consectetur.', width: ''},
		{title: 'Modal #3', mainText: 'Lorem ipsum dolor sit.', width: ''},
		{title: 'Modal #4', mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas.', width: ''},
	]

	let mainBttns = document.querySelectorAll('.entry-menu');
	let closing = false;
	function createModal(params){
		let myModal = document.createElement('div');
		myModal.classList.add('modal');
		myModal.insertAdjacentHTML('afterBegin', `
			<div class="modal-overlay">
				<div class="modal-window">
					<div class="modal__header">
						<p>${params.title}</p>
						<button class="modal__header__exit" data-close='true'>&#10006;</button>
					</div>
					<div class="modal__main-text">
						<p>${params.mainText}</p>
					</div>
					<div class="modal__buttons">
						<button class="modal__buttons__agree">Ok</button>
						<button class="modal__buttons__disagree" data-close='true'>Cancel</button>
					</div>
				</div>
			</div>
			`);
		 document.body.append(myModal);
		 return myModal;
	}

	mainBttns.forEach( function(element, index) {
		element.addEventListener('click', function(){
			if (closing === false) {
				const newModal = createModal(options[index]);
				setTimeout(function(){
					newModal.classList.add('open');
				}, 10);
			}
		});
	});

	function destroyModal(){
		document.querySelector('.modal').remove();
		closing = false;
	}

	
	document.addEventListener('click', function(e){
		if (e.target.dataset.close){
			closing = true;
			document.querySelector('.modal').classList.remove('open');
			setTimeout(destroyModal, 500);
		}
	})
});