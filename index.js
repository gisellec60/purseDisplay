function createPurseCard(purse) {
    //console.log(purse)
    //Build Purse
    let card = document.createElement("div")
    card.className = 'card'
    let purseImage = document.createElement("img")
    purseImage.src = purse.img
    purseImage.className = "purseImage"
    let content = document.createElement("div")
    content.className = "purse"
    let h4 = document.createElement("h4")
    h4.textContent = `Brand: ${purse.brand}`
    let p1 = document.createElement("p")
    p1.textContent = `Style: ${purse.style}`
    let p2 = document.createElement("p")
    p2.textContent = `Color: ${purse.color}`
    let p3 = document.createElement("p")
    p3.textContent = `Size: ${purse.size}`
    let p4 = document.createElement("p")
    p4.textContent = `condition: ${purse.condition}`
    let p5 = document.createElement("p")
    p5.textContent = `price: $${purse.price}.00`
    let p6 = document.createElement("p")
    p6.textContent = `description: ${purse.description}`
    
    let butn1 = document.createElement("button")
    butn1.className = "avail"
    butn1.textContent = "Available"
 
    let butn2 = document.createElement("button")
    butn2.className = "edit"
    butn2.textContent = "Edit"
    

    let butn3 = document.createElement("button")
    butn3.className = "delete"
    butn3.textContent = "Delete"

    let butn4 = document.createElement("button")
    butn4.className = "seller"
    butn4.textContent = "Seller"

    butn1.addEventListener("click", toggleAvailable)
    butn2.addEventListener("click", editCard)
    butn3.addEventListener("click", deleteCard)
    butn4.addEventListener("click", contactSeller)

    content.append(h4, p1, p2, p3, p4, p5, butn1, butn2, butn3, butn4)
    
    card.append(purseImage, content)
    //add pusre to DOM
    document.querySelector(".square").appendChild(card)
    
           
        // let butns = document.querySelectorAll('.delete');
        // let delButns = Array.from(butns)
        // console.dir(delButns)
        // for (i = 0; i < delButns.length; i++) {
        //     delButns[i].addEventListener("click", function (e) {
        //         console.log("this is card", card)
        //         // card.remove()
        //     })
        // }
    
        // let selButns = document.querySelectorAll(".seller")
        // for (i = 0; i < selButns.length; i++) {
        //     selButns[i].addEventListener("click", function (e) {
        //         alert("clicked button " + e.target.textContent)
            
        //     })
        // }

        // let editButns = document.querySelectorAll(".edit")
        // for (i = 0; i < editButns.length; i++) {
        //     editButns[i].addEventListener("click", function (e) {
        //         alert("clicked button " + e.target.textContent)
            
        //     })
        // }
        // let displayDesc = document.querySelectorAll(".purseImage")
        //     for (i = 0; i < displayDesc.length; i++) {
        //         displayDesc[i].addEventListener("click", function (e) {
        //         console.log("clicked button " + e.target)
        //         console.log(purse.description)    
        //     })
        //     }
 }
function toggleAvailable(e) {
    if (e.target.innerText === "Available") {
        e.target.innerText = "Uavailable"
    } else {
        e.target.innerText="Available"
    }
}    

function editCard(e) {cd 
    console.log(e.target)
}    
function deleteCard(e) {
    console.log(e.target)
}    
function contactSeller(e) {
    console.log(e.target)
}    

    //Fetch Requests
    //Using Get fetch all the pursedata
    function getAllPurses() {
        fetch("http://localhost:3000/purseData")
            .then(res => res.json())
            .then(purseData => purseData.forEach(purse => createPurseCard(purse)))
    }
    // fetch add purse to the DOM
    getAllPurses()
    // This load cards.
    document.getElementById("addPurseInfo").addEventListener("submit", (e) => {
        e.preventDefault()
        let newPurseObj = {
            brand: document.getElementById("brand").value,
            style: document.getElementById("style").value,
            color: document.getElementById("color").value,
            size: document.getElementById("size").value,
            img: document.getElementsByClassName("purseImage").value,
            desc: document.getElementById("desc").value,
            condition: document.getElementById("desc").value,
            price: document.getElementById("price").value
        }
        console.log("showme", newPurseObj)
        addPurseCard(newPurseObj)
    })
    function addPurseCard(newPurseObj) {
        fetch("http://localhost:3000/purseData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPurseObj)
        })
            .then(res => res.json())
            .then(newPurseObj => createPurseCard(newPurseObj))
    }
