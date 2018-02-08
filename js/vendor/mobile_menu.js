(function(){ })();
 
 var nav = document.getElementById('menu_control'),
 nav_menu = document.getElementById('site-links');

 nav.addEventListener('click', function (e) {
 	if (nav_menu.style.display !== 'block') {
 		nav_menu.style.display = 'block';
 		nav_auth_menu.style.display = 'none';

 	} else {
 		nav_menu.style.display = 'none';
 	}


     e.preventDefault();
 });

var nav2 = document.getElementById('menu_control_2'),
 nav_auth_menu = document.getElementById('menu_control-auth');

 nav2.addEventListener('click', function (e) {
	if (nav_auth_menu.style.display !== 'block') {
		nav_auth_menu.style.display = 'block';
		nav_menu.style.display = 'none';
	}else {
		nav_auth_menu.style.display = 'none';
	}

 
    e.preventDefault();
});
 
/*
function open() {
	m1 = document.getElementById('menu_control');
	m2 = document.getElementById('menu_control_2');
	if (m1.style.display == 'block') {
		m2.style.display = 'none';
	}if (m2.style.display == 'block') {
		m1.style.display = 'none';
	}
}

*/
