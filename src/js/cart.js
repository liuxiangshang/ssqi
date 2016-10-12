//利用cookie生成购物车的方法
function goodsCart () {
	//获取cookie
	var listcookie = getCookie("goodscke");
	var goodList = JSON.parse(listcookie);
	//console.log(goodList);
	//生成ul
	var $ul = $("<ul />");
	//单样商品的总价
	var sum = 0;
	//所有商品的总价
	var sums = 0;
	for (var i = 0; i < goodList.length; i++) {
		var $li = $("<li />");
		var $divdetail = $("<div/>").addClass("goods_detail");
		var $p = $("<p/>").addClass("table_cell");
		var $pp = $("<p/>");
		//单样商品的总价
		sum = goodList[i].price*goodList[i].num;
		//所有商品的总价
		sums += sum;
		//利用cookie生成购物车中商品列表结构
		$("<input/>").attr({type:"checkbox",name:"chb",checked:"checked"}).appendTo($divdetail);
		$("<a/>").append($("<img/>").attr({src:goodList[i].img}).addClass("good_img")).appendTo($divdetail);
		$("<span/>").addClass("gname").html(goodList[i].entitle).appendTo($p);
		$("<br/>").appendTo($p);
		$("<span/>").addClass("gcs").html(goodList[i].color+"/"+goodList[i].size).appendTo($p);
		$("<br/>").appendTo($p);
		$("<a/>").attr({title:"修改",}).addClass("cart_edit").appendTo($p);
		$("<a/>").attr({title:"收藏",}).addClass("cart_fav").appendTo($p);
		$("<a/>").attr({title:"删除",}).addClass("cart_del").appendTo($p);
		$("<div/>").addClass("goods_title").append($p).appendTo($divdetail);
		$divdetail.appendTo($li);
		$("<div/>").addClass("goods_price").append($("<span/>").html("¥"+goodList[i].price)).appendTo($li);
		$("<div/>").addClass("goods_emoney").append($("<span/>").html("¥"+goodList[i].emoney)).appendTo($li);
		$("<a/>").addClass("reduce").appendTo($pp);
		$("<input/>").attr({type:"text",name:"qty",maxlength:"3"}).addClass("goodsnum").val(goodList[i].num).appendTo($pp);
		$("<a/>").addClass("plus").appendTo($pp);
		$("<div/>").addClass("goods_qty").append($pp).appendTo($li);
		$("<div/>").addClass("goods_sum").append($("<span/>").html("¥"+sum)).appendTo($li);
		//把li添加到ul中
		$li.appendTo($ul);
	}
	//把ul添加到购物车的div中
	$ul.appendTo($(".cart_body"));
	//商品金额
	var $listprice = $(".list_k .cart_price");
	//会员优惠
	var $hdyhprice = $(".hdyh_k .cart_price");
	//支付金额
	var $hyyhprice = $(".hyyh_k .cart_price");
	$listprice.html(sums);
	$hdyhprice.html("0");
	$hyyhprice.html(sums);
}
//删除购物车里面的商品
function clicks () {
	//获取购物车中的商品列表
	var $lis = $(".cart_body ul li");
	//获取删除按钮
	var $del = $lis.find(".cart_del");
	//遍历删除按钮
	$.each($del, function(idx,ele) {
		//删除按钮的点击事件
		$(this).on("click",function () {
			//获取购物车的cookie
			var listcookie = getCookie("goodscke");
			//转换为数组
			var goodList = JSON.parse(listcookie);
			//移除当前点击的商品
			$lis.eq(idx).remove();
			//删除当前点击的商品的对象
			goodList.splice(idx,1);
			//把删除之后的数组转换为字符串
			var goodscookie = JSON.stringify(goodList);
			var d = new Date(10);
			//把字符串存入cookie中
			var goodscke = setCookie("goodscke",goodscookie,d,"/");
			//显示新的购物车cookie中的商品件数
			listcart();
			//调用生成购物车的方法
			goodsCart();
		});
	});
	
}