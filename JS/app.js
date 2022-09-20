/*------------------------------ MENU SHOW/HIDDEN Y ------------------------------*/
const navMenu = document.getElementById ('nav-menu'),
        navToggle = document.getElementById ('nav-toggle'),
        navClose = document.getElementById ('nav-close')

/*------------------------------ SHOW MENU ------------------------------*/
/* Validate if contant exists */
if (navToggle) {
    navToggle.addEventListener ('click', () =>{
        navMenu.classList.remove ('hide-menu')
        navClose.classList.remove ('hide-menu')
        navToggle.classList.add ('hide-menu')
    })
}

/*------------------------------ HIDDEN MENU ------------------------------*/
/* Validate if contant exists */
if (navClose){
    navClose.addEventListener ('click', () =>{
        navMenu.classList.add ('hide-menu')
        navClose.classList.add ('hide-menu')
        navToggle.classList.remove ('hide-menu')
    })
 }

/*------------------------------ REMOVE MENU MOBILE ------------------------------*/
const navLink = document.querySelectorAll ('.nav_link')

function linkAction (){
    //when we click on each 'nav_link, we remove the show-menu class.
    navMenu.classList.add ('hide-menu')
}

navLink.forEach (n => n.addEventListener ('click', linkAction))

/*------------------------------ QUALIFICATION TABS ------------------------------*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')
        
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})        

/*------------------------------ PORTFOLIO ------------------------------*/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage (){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})