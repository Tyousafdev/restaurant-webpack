import homePage from "./home" 
import menuPage from "./menu"
import ç from "./contact"
import "./style.css"
import contactPage from "./contact"




function loadPage(page){
    const content = document.getElementById("content")
    content.innerHTML = ("")

    if(page === "home"){
        content.appendChild(homePage())
    } else if (page === "menu"){
        content.appendChild(menuPage())
    } else if (page === "contact"){
        content.appendChild(contactPage())
    }

}
document.getElementById("homeBtn").addEventListener("click", () => loadPage("home"));
document.getElementById("menubtn").addEventListener("click", () => loadPage("menu"));
document.getElementById("contactbtn").addEventListener("click", () => loadPage("contact"))

loadPage("home");
