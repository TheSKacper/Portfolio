var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabName)
{
    for(tabLink of tabLinks)
    {
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents)
    {
        tabContent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add("active-tab")
}

var sidemenu = document.getElementById('sideMenu')
var aClick = document.getElementById('test')

function openMenu() {
    sidemenu.classList.add("show_menu");
    sidemenu.classList.remove("hide_menu");
   }
   function closeMenu() {
    sidemenu.classList.add("hide_menu");
    sidemenu.classList.remove("show_menu");
   }