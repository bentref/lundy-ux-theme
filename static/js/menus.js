open = 0;
function menu() {
	if (open == 0) {
		$("nav").show();
		$("#menu-act").attr("src","/img/menu-close.png");
		open = 1;
	} else {
		$("nav").hide();
		$("#menu-act").attr("src","/img/menu-act.png");
		open = 0;
	}
}
ddnum = 0;

