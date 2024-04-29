// var settingsMenu = document.querySelector(".settings-menu");
// var darkBtn = document.getElementById("dark-btn");

// function settingsMenuToggle(){
//   settingsMenu.classList.toggle("settings-menu-height")
// }
// function darkBtnToggle(){
//   darkBtn.classList.toggle("dark-btn-on")
//   document.body.classList.toggle("dark-theme")

//   if (localStorage.getItem('theme') == 'light'){
//   localStorage.setItem('theme', 'dark')
//   }
//   else{
//   localStorage.setItem('theme', 'light')
//   }
// }

// localStorage.setItem("theme", "dark")
// localStorage.getItem("theme")

// if(localStorage.getItem('theme') == 'light'){
//   darkBtn.classList.remove('dark-btn-on');
//   document.body.classList.remove("dark-theme")
// }
// else if (localStorage.getItem('theme') == 'add'){
//   darkBtn.classList.add('dark-btn-on');
//   document.body.classList.add("dark-theme")
// }
// else{
//   localStorage.setItem('theme', 'light')
// }


// darkBtn.onclick = function(){
//   darkBtn.classList.toggle("dark-btn-on");
// }




let settingsMenu = document.querySelector(".settings-menu");

let darkBtn = document.getElementById("dark-btn")
 
function settingsMenuToggle(){
  settingsMenu.classList.toggle("settings-menu-height")
}

function darkBtnToggle(){
  darkBtn.classList.toggle("dark-btn-on")
  document.body.classList.toggle("dark-theme")

// i don't understand this shit fam!!!
  if (localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark")
  }
  else{
    localStorage.setItem("theme", "light")
  }
}

if (localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on")
  document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on")
  document.body.classList.add("dark-theme")
}
else{
  localStorage.setItem("theme", "light")
}

// localStorage.setItem("theme", "light")
// localStorage.getItem("theme")