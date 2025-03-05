


function contactPage(){

    const contactDiv = document.createElement("div")
    contactDiv.classList = ("contact")

    const contactSubtitle = document.createElement("h1")
    contactSubtitle.textContent = ("about us.")

    const contactDes = document.createElement("p")
    contactDes.textContent = ("heres something about us and where you can reach us.")


    contactDiv.appendChild(contactSubtitle)
    contactDiv.appendChild(contactDes)


    return contactDiv
}


export default contactPage;