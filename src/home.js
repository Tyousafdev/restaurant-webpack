


function homePage(){
    const  homeDiv = document.createElement("div")
    homeDiv.classList = ("home")

    const subtitle = document.createElement("h1")
    subtitle.textContent = ("Welcome, child")

    const description = document.createElement("p")
    description.textContent = ("This life, is but a test. why not enjoy it to the fullest.")



    homeDiv.appendChild(subtitle)
    homeDiv.appendChild(description)


    return homeDiv;
}


export default homePage;