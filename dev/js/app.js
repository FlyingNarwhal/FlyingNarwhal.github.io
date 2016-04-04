var ViewModel = function() {
	that = this;
	title = ko.observable("");
	this.showMenu = function(){
		console.log('click');
		// $prof = $('.profile');
		$list = $('.header-navbar-list');
		$menuCover = $('.menuCover') || undefined;
		$aboutMe = $('.contact-about') || undefined;

		// $prof.css('display', $prof.css("display") === 'none' ? '' : 'none');
		$list.css('display', $list.css("display") === 'block' ? '' : 'block');
		$menuCover.css('display', $menuCover.css("display") === 'none' ? '' : 'none');
	};

	this.showCredit = function(){
		$credit = $('.credit');
		console.log("click");

		$credit.css('display', $credit.css("display") === 'block' ? '' : 'block');
	}

	this.titleSwitch = function(el){
		switch(el){
			case 'linkedin': 
				title("Let's connect");
				break;
			case 'email': 
				title('Email me');
				break;
			case 'git':
				title("Fork me");
				break;
			case 'none':
				title("");
				break;
		}
	};

	// This is for the web worker mailWorker.js
	// TODO create form field checks

	// to be used with senderEmail in formValue
	// Check validity of users input as email address
	this.emailQuery = ko.observable('');
	this.validEmail = ko.computed(function(){
		var filter = ko.observable(this.emailQuery);
		if(filter()){
			// Check that the email provided is a of type "johndoe@example.com"
			var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			if(testEmail.test(filter())){
				return true;
			} else {
				// return false, prompting user to check email
				return false;
			}
		}
	});
	this.senderName = ko.observable('');
	this.emailSubject = ko.observable('');
	this.emailBody = ko.observable('');
	this.newEmail = function(){
		// initialize form field variables

		//Obtain form data
		formValues = {
			'SenderName': that.senderName(),
			'SenderEmail': that.validEmail(),
			'Subject': that.emailSubject(),
			'Body': that.emailBody()
		};

		$.ajax({
    	url: "../cgi-bin/mailer.py",
    	type: "post",
    	contentType: "application/json; charset=utf-8",
    	dataType: "json",
    	data: JSON.stringify({
      	data: formValues
    	}),
    	success: function(response){
      	console.log('ajax success');
   	  }
 		});

		// mailWorker.postMessage(formValues)
		// mailWorker.onMessage = function(e){
		// 	console.log(e.data);
		// }
	}
};

ko.applyBindings(new ViewModel());