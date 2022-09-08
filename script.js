// this is we add for smooth scroller
var scroll = new SmoothScroll('a[href*="#"]');

// setdisplay to none if any is clicked
var menu = document.querySelector('.action_menu')
setDecoIds = document.querySelectorAll('#setDeco');
setDecoIds.forEach(setDecoId => {
	setDecoId.onclick = function(e){
		menu.style.display = "none";
	}
});


// this is for showing block option when clicked
idIsthere = document.getElementById('action_menu_btn');
if(idIsthere){
    document.querySelector('#action_menu_btn').onclick = function(e) {
        if (menu.style.display === "none"){
            menu.style.display = "block";
        }else{
            menu.style.display = "none";
        }
    }
}

document.getElementById('click-box').addEventListener('click', () => {
	if (menu.style.display !== "none"){
		menu.style.display = "none";
	}
}); 



let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('default')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode){
	
	try {
		for (var i=0; themeDots.length > i; i++){
			themeDots[i].classList.remove('active')
		}
	} catch(e) {}

	if(mode == 'default') {
		document.getElementById('light-mode').classList.add('active');
	}

	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
		document.getElementById('light-mode').classList.add('active');
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
		document.getElementById('blue-mode').classList.add('active');
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
		document.getElementById('green-mode').classList.add('active');
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
		document.getElementById('purple-mode').classList.add('active');
	}

	localStorage.setItem('theme', mode)
}

// this will call the function on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	// this function we make to show the button when we going down
    let buttonId = document.getElementById("goTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        buttonId.style = "transition: 1s ease-in; opacity:100%;";                            
    } else {
        buttonId.style = "opacity:0;";
    }
}
