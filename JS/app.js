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
