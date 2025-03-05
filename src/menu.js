


function menuPage(){
    const menuDiv = document.createElement("div")
    menuDiv.classList = ("menu")

    const menuSubtitle = document.createElement("h1")
    menuSubtitle.textContent = ("Take a look at our menu!!")

    const menyDes = document.createElement("p")
    menyDes.textContent = ("here is a list of our finest dishes in order of popularity:")


    menuDiv.appendChild(menuSubtitle)
    menuDiv.appendChild(menyDes)


    return menuDiv;

}


export default menuPage;