function listcart () {
	var oldcke = getCookie("goodscke");
	if (oldcke) {//存在购物车cookie是
		var good_list = JSON.parse(oldcke);
		var nums = 0;
		//循环遍历数组
		for (var i = 0; i < good_list.length; i++) {
			//获取购物车cookie中商品的总件数
			nums += good_list[i].num;
		}
		var $cart = $(".cart a span");
		//把总件数展示在购物车
		$cart.html(nums);
	}
}

function details () {//详情页的方法
	$.ajax({
		url:"../assets/Json/lists.json",
		dataType:"json",
		success:function (res) {
			//便利goodslist.json，即res
			$.each(res, function(idxs,items) {
				//获取cookie中存储的id
				var listId = getCookie("listId");
				//当id与json中的id相等时根据json生成详情页中的图片等
				if (items.id == listId) {
					//生成详情页商品的结构
					$("<span />").html(items.title).appendTo($(".goodview_nav"));
					$("<img/>").attr({src:items.imgurl}).appendTo($(".goodlist_img"));
					$("<strong />").html(items.english_title).appendTo($(".goods_title"));
					$("<p />").html(items.han_title).appendTo($(".goods_title"));
					$("<p />").html(items.title).appendTo($(".goods_title"));
					$("<span />").html(items.gicon).appendTo($(".goods_title"));
					$("<span />").html("¥ "+items.price).addClass("sell_price").appendTo($(".sell_content strong"));
					$(".emoney strong").html(parseInt(items.price/100));
					//放大镜插件
					$(".goodlist_img").lzoom();
					//商品数量加减
					var $reduce = $(".reduce");
					var $plus = $(".plus");
					var $goodsnum = $(".goodsnum");
					//商品数量减
					$reduce.on("click",function () {
						var i = parseInt($goodsnum.val());
						if (i == "1") {
							$goodsnum.val(1);
						} else{
							$goodsnum.val(i-1);
						}
					});
					//商品数量加
					$plus.on("click",function () {
						var i = parseInt($goodsnum.val());
						$goodsnum.val(i+1);
					});
					//获取购物车按钮
					var $cart_btn = $(".cart_btn");
					//购物车点击事件
					//定义一个空数组
					var goodList = [];
					//加入购物车点击事件
					$cart_btn.on("click",function () {
						//定义一个空对象
						var goods = {};
						//获取已有的cookie
						var oldcookie = getCookie("goodscke");
						//console.log(oldcookie);
						//如果购物车cookie为空时
						if (oldcookie == "") {//把要存进cookie中的数据存进空对象中
							goods.id = items.id;
							goods.img = items.imgurl;
							goods.price = items.price;
							goods.entitle = items.english_title;
							goods.num = parseInt($goodsnum.val());
							goods.color = $(".gcolor").val();
							goods.size = $(".gsize").val();
							goods.emoney = parseInt($(".emoney strong").html());
							//把对象存进数组中
							goodList.push(goods);
						} else{
							//把cookie字符串转换为数组
							goodList = JSON.parse(oldcookie);
							var j = true;
							//循环遍历数组
							for (var i = 0; i < goodList.length; i++) {
								//数组中存在id与当前点击的商品id一样时改变当前下标中的num值
								if (goodList[i].id == items.id) {
									goodList[i].num = parseInt(goodList[i].num) + parseInt($goodsnum.val());
									j = false;
									break;
								}
							}
							if (j) {//cookie中不存在一样的商品时添加一个新的对象进数组中
								goods.id = items.id;
								goods.img = items.imgurl;
								goods.price = items.price;
								goods.entitle = items.english_title;
								goods.num = parseInt($goodsnum.val());
								goods.color = $(".gcolor").val();
								goods.size = $(".gsize").val();
								goods.emoney = parseInt($(".emoney strong").html());
								goodList.push(goods);
							}
							
						}
						//把数组转换为字符串
						var goodscookie = JSON.stringify(goodList);
						var d = new Date(10);
						//把字符串存入cookie中
						var goodscke = setCookie("goodscke",goodscookie,d,"/");
						//加入购物车效果
						var $img = $(".goodlist_img img");
						//复制图片
						var $copyimg = $img.clone();
						var OFF = $img.offset();
						var oWidth = $img.outerWidth();
						//给复制的图片添加样式
						$copyimg.css({
							position:"absolute",
							left:OFF.left,
							top:OFF.top,
							width:oWidth
						});
						//把复制的图片添加到body中
						$copyimg.appendTo("body");
						var $cartOFF = $(".header .cart").offset();
						var $cartOWidth = $(".header .cart").outerWidth();
						//图片飞到购物车的运动
						$copyimg.animate({top:$cartOFF.top,left:$cartOFF.left+$cartOWidth,width:0,opacity:0},2000,function () {
							//图片飞到购物车时移除复制图片
							$copyimg.remove();
							//更新购物车商品总数
							listcart();
						});
					});
				}
			});	
			
		}
	});
	
}