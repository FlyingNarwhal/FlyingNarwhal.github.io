var ViewModel = function() {
	var that = this;

	/**
	* Toggle view of navigation menu across, index.html and resume.html
	* @return {boolean} toggle visibility
	*/
	this.showMenu = function(){
		$list = $('.header-navbar-list');
		$menuCover = $('.menuCover') || undefined;
		$aboutMe = $('.contact-about') || undefined;

		$list.toggle('fast');
		$menuCover.toggle('fast');
	};

	/**
	* Toggle the view for asset artist credit
	* @return {boolean} return the view as visible, or not
	*/
	this.showCredit = function(){
		$credit = $('.credit');
		console.log("click");

		$credit.toggle('fast');
	};

	this.showForm = function(){
		window.requestAnimationFrame(that.showFormCallback);
	};

	/**
	 * Handle the contact form view, for mobile, and desktop devices.
	 * 		Called by showForm
	 * @return {boolean} toggle the view of contact-links when
	 *    contact-form is shown
	 */
	this.showFormCallback = function(){
		$form = $('.contact-form');
		$title = $('.contact-about');
		$exit = $('.exit-icon');
		$links = $('.contact-links');
		console.log('click');

		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			$title.toggle();
			$form.toggle();
			$exit.toggle();
			$links.css('display', $links.css("display") === 'block' ? 'none' : 'block');
		} else
		{
			$title.toggle('fast');
			$form.toggle('fast');
		}
	};

	// TODO give feedback for invalid input
	this.emailQuery = ko.observable('');
	this.validEmail = ko.computed(function(){
		var filter = ko.observable(that.emailQuery());
		if(filter()){
			// Check that the email provided is a of type "johndoe@example.com"
			var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			if(testEmail.test(filter())){
				$('.contact-submit-btn').removeClass('invalid-email');
				$('.contact-submit-btn').addClass('valid-email');
				return true;
			} else {
				$('.contact-submit-btn').addClass('invalid-email');
				return false;
			}
		}
	});
	this.senderName = ko.observable('');
	this.emailSubject = ko.observable('');
	this.emailBody = ko.observable('');
};

ko.applyBindings(new ViewModel());
