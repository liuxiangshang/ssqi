function cookie_register (urls) {
	var $register_txt = $(".pop_register_item .txtgb");
	var $register_pwd = $(".pop_register_item .pwdbg");
	var $register_repwd = $(".pop_register_item .reg_pwdbg");
	var $register_name = $(".pop_register_item .namebg");
	var $register_sex = $(".pop_register_item .selectbg");
	var $register_phone = $(".pop_register_item .cphonebg");
	var $register_code = $(".pop_register_item .codebg");
	var $register_safe = $(".pop_register_item .input_code .safe");
	var $register_agree = $(".pop_register_tip .agree input");
	var $register_subimt = $(".pop_register_submit");
	var $register_txt_error = $(".pop_register_item .txt_error");
	var $register_pwd_error = $(".pop_register_item .pwd_error");
	var $register_sex_error = $(".pop_register_item .sex_error");
	var $register_phone_error = $(".pop_register_item .phone_error");
	var $register_code_error = $(".pop_register_item .code_error");
	
	//电子邮件失去焦点事件
	$register_txt.on("blur",function () {
		var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if (pattern.test($(this).val())) {
			$register_txt_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$register_txt_error.html("电子邮件格式错误");
			$(this).attr({ble:"false"});
		}
	});
	//密码是否一致
	$register_repwd.on("blur",function () {
		if ($(this).val() == $register_pwd.val()) {
			$register_pwd_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$register_pwd_error.html("密码不一致");
			$(this).attr({ble:"false"});
		}
	});

	//验证手机号是否正确
	$register_phone.on("blur",function () {
		var pattern = /^[1]\d{10}$/;
		if (pattern.test($(this).val())) {
			$register_phone_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$register_phone_error.html("手机号格式错误");
			$(this).attr({ble:"false"});
		}
	});
	//验证码
	$register_code.on("blur",function () {
		if ($(this).val() == $register_safe.html()) {
			$register_code_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$register_code_error.html("验证码错误");
			$(this).attr({ble:"false"});
		}
	});
	
	function ble () {
		if ($register_agree.prop("checked") == true) {
			$register_agree.attr({ble:"true"});
		} else{
			$register_agree.attr({ble:"false"});
		}
		
		$.each($(".pop_register_input input"), function(idx,item) {
			if ($(item).val() == "") {
				$(item).attr({ble:"false"});
			}
		});
	}
	
	ble();
	
	//点击注册事件
	$register_subimt.on("click",function () {
		var d = new Date(10);
		$.each($(".pop_register_input input"), function(idx,item) {
			if ($(item).attr("ble") == "true") {
				var email = setCookie("email",$register_txt.val(),d);
				var password = setCookie("password",$register_pwd.val(),d);
				var username = setCookie("username",$register_name.val(),d);
				var sex = setCookie("sex",$register_sex.val(),d);
				var phone = setCookie("phone",$register_phone.val(),d);
				$register_subimt.attr({href:urls});
			}
		});
	});
}

function cookie_wholesale (urls) {
	var $wholesale_txt = $(".pop_wholesale_item .txtgb");
	var $wholesale_pwd = $(".pop_wholesale_item .pwdbg");
	var $wholesale_repwd = $(".pop_wholesale_item .reg_pwdbg");
	var $wholesale_name = $(".pop_wholesale_item .namebg");
	var $wholesale_sex = $(".pop_wholesale_item .selectbg");
	var $wholesale_phone = $(".pop_wholesale_item .cphonebg");
	var $wholesale_code = $(".pop_wholesale_item .codebg");
	var $wholesale_safe = $(".pop_wholesale_item .input_code .safe");
	var $wholesale_agree = $(".pop_wholesale_tip .agree input");
	var $wholesale_address = $(".pop_wholesale_item .address");
	var $wholesale_detailaddrbg = $(".pop_wholesale_item .detailaddrbg");
	var $wholesale_subimt = $(".pop_wholesale_submit");
	var $wholesale_txt_error = $(".pop_wholesale_item .txt_error");
	var $wholesale_pwd_error = $(".pop_wholesale_item .pwd_error");
	var $wholesale_sex_error = $(".pop_wholesale_item .sex_error");
	var $wholesale_phone_error = $(".pop_wholesale_item .phone_error");
	var $wholesale_code_error = $(".pop_wholesale_item .code_error");
	var $wholesale_detailaddr_error = $(".pop_wholesale_item .detailaddr_error");
	var $wholesale_address_error = $(".pop_wholesale_item .address_error");
	
	//电子邮件失去焦点事件
	$wholesale_txt.on("blur",function () {
		var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if (pattern.test($(this).val())) {
			$wholesale_txt_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$wholesale_txt_error.html("电子邮件格式错误");
			$(this).attr({ble:"false"});
		}
	});
	//密码是否一致
	$wholesale_repwd.on("blur",function () {
		if ($(this).val() == $wholesale_pwd.val()) {
			$wholesale_pwd_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$wholesale_pwd_error.html("密码不一致");
			$(this).attr({ble:"false"});
		}
	});

	//验证手机号是否正确
	$wholesale_phone.on("blur",function () {
		var pattern = /^[1]\d{10}$/;
		if (pattern.test($(this).val())) {
			$wholesale_phone_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$wholesale_phone_error.html("手机号格式错误");
			$(this).attr({ble:"false"});
		}
	});
	//验证码
	$wholesale_code.on("blur",function () {
		if ($(this).val() == $wholesale_safe.html()) {
			$wholesale_code_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$wholesale_code_error.html("验证码错误");
			$(this).attr({ble:"false"});
		}
	});
	//省份
	$wholesale_address.on("blur",function () {
		if ($(this).val() != "no") {
			$wholesale_address_error.html("");
			$(this).attr({ble:"true"});
		} else{
			$wholesale_address_error.html("请选择地址");
			$(this).attr({ble:"false"});
		}
	});
	
	function ble () {
		if ($wholesale_agree.prop("checked") == true) {
			$wholesale_agree.attr({ble:"true"});
		} else{
			$wholesale_agree.attr({ble:"false"});
		}
		
		if ($wholesale_address.val() == "no") {
			$wholesale_address.attr({ble:"false"});
		}
		
		$.each($(".pop_register_input input"), function(idx,item) {
			if ($(item).val() == "") {
				$(item).attr({ble:"false"});
			}
		});
	}
	
	ble();
	
	//点击注册事件
	$wholesale_subimt.on("click",function () {
		var d = new Date(10);
		$.each($(".pop_wholesale_input input"), function(idx,item) {
			if ($(item).attr("ble") == "true" && $wholesale_address.attr("ble") == "true") {
				var emails = setCookie("emails",$wholesale_txt.val(),d);
				var passwords = setCookie("passwords",$wholesale_pwd.val(),d);
				var usernames = setCookie("usernames",$wholesale_name.val(),d);
				var sexs = setCookie("sexs",$wholesale_sex.val(),d);
				var phones = setCookie("phones",$wholesale_phone.val(),d);
				var address = setCookie("address",$wholesale_address.val(),d);
				var detailaddr = setCookie("detailaddr",$wholesale_detailaddrbg.val(),d);
				$wholesale_subimt.attr({href:urls});
			}
		});
	});
}