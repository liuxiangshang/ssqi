function cookie_login (urls) {
	var $pop_login_submit = $(".login_pt .pop_login_submit");
	var $text = $(".login_pt .text");
	var $pwd = $(".login_pt .pwd");
	
	$pop_login_submit.on("click",function () {
		var email = getCookie("email");
		var password = getCookie("password");
		if ($text.val() == email && $pwd.val() == password) {
			$pop_login_submit.attr({href:urls});
//			$(".logins_a").css({display:"none"});
//			$(".logins_user").css({display:"block"});
		}
	});
}

function cookie_wholesale_login (urls) {
	var $pop_login_submit = $(".login_wholesale .pop_login_submit");
	var $text = $(".login_wholesale .text");
	var $pwd = $(".login_wholesale .pwd");
	
	$pop_login_submit.on("click",function () {
		var email = getCookie("emails");
		var password = getCookie("passwords");
		if ($text.val() == email && $pwd.val() == password) {
			$pop_login_submit.attr({href:urls});
		}
	});
}