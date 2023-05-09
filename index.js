function createPurseCard(purse) {
     //Build Purse
    let card = document.createElement("div")
    card.className = 'card'
    card.id = `card-${purse.id}`
    let purseImage = document.createElement("img")
    purseImage.src = purse.img
    
    purseImage.className = "purseImage"
    purseImage.id = `purseImg-${purse.id}`
    console.log(purseImage.id)
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
    p6.id = `desc-${purse.id}`
    p6.textContent = `description: ${purse.description}`
    
    let butn1 = document.createElement("button")
    butn1.className = "avail"
    butn1.id = `butn1-${purse.id}`
    console.log(butn1.id)
    butn1.textContent = "Available"
 
    let butn2 = document.createElement("button")
    butn2.className = "edit"
    butn2.id=`butn2-${purse.id}`
    butn2.textContent = "Edit"
    

    let butn3 = document.createElement("button")
    butn3.className = "delete"
    butn3.id = `butn3-${purse.id}`
    butn3.textContent = "Delete"

    let butn4 = document.createElement("button")
    butn4.className = "seller"
    butn4.id = `butn4-${purse.id}`
    butn4.textContent = "Seller"

    butn1.addEventListener("click", toggleAvailable)
    butn2.addEventListener("click", editCard)
    butn3.addEventListener("click", deleteCard)
    butn4.addEventListener("click", contactSeller)
    purseImage.addEventListener("mouseover", mouseOver)
    purseImage.addEventListener("mouseout", mouseOut)

    content.append(h4, p1, p2, p3, p4, p5, butn1, butn2, butn3, butn4)
    console.log
    card.append(purseImage, content)
    //add pusre to DOM
    document.querySelector("#square").appendChild(card)

    function deleteCard() {
        card.remove()
        removeCardFromServer(purse.id)
    }
    
    function editCard() {
        if (document.getElementById("editForm-Container").style.visibility === "visible") {
            document.getElementById("editForm-Container").style.visibility = "hidden"
        }
        else {
          document.getElementById("editForm-Container").style.visibility = "visible"  
        }
        document.getElementById("brand").value = purse.brand
        document.getElementById("style").value = purse.style
        document.getElementById("color").value = purse.color
        document.getElementById("size").value = purse.size
        document.getElementById("purseImg").value = purse.img
        document.getElementById("condition").value = purse.condition
        document.getElementById("desc").value = purse.description
        document.getElementById("price").value = purse.price
        document.getElementById("jId").value = purse.id
    }

document.getElementById("addPurseInfo").addEventListener("submit", (e) => {
        e.preventDefault()
        document.getElementById("editForm-Container").style.visibility = "hidden"
        let purseObj = editPurseObj(purse)
        updatePurseData(purseObj)
    })
    
function contactSeller() {
    if (document.getElementById("email").style.visibility === "visible"){
            document.getElementById("email").style.visibility = "hidden"
    }
    else {
        document.getElementById("email").style.visibility = "visible"
       // document.getElementById("firstName").value = purse.firstName
        document.getElementById("emailSel").value = purse.email
    }
}   
    function toggleAvailable(e) {
        console.log(purse.id)
        if (e.target.innerText === "Available") {
            e.target.innerText = "Uavailable"
            document.getElementById(`butn2-${purse.id}`).disabled = true;
            document.getElementById(`butn3-${purse.id}`).disabled = true;
            document.getElementById(`butn4-${purse.id}`).disabled = true;
        } else {
            e.target.innerText = "Available"
            document.getElementById(`butn2-${purse.id}`).disabled = false;
            document.getElementById(`butn3-${purse.id}`).disabled = false;
            document.getElementById(`butn4-${purse.id}`).disabled = false;
        }
    }    

    // document.getElementById(`card-${purse.id}`).addEventListener("click", mouseOver)
    // document.getElementById(`card-${purse.id}`).addEventListener("click", mouseOut)

     function mouseOver() {
         console.log(`desc-${purse.id}`) 
         console.log(purse.desc)
     }
    
    function mouseOut() {
       console.log(`desc-${purse.id}`) 
     }
    
} //createPurseCard
// document.getElementById(`card-${purse.id}`).addEventListener("mouseover", mouseOver)
// document.getElementById(`card-${purse.id}`).addEventListener("mouseout", mouseOut)

function mouseOver() {
       console.log(`desc-${purse.id}`) 
    }

document.getElementById("addPurseButn").addEventListener("click", (e) => {
    if (document.getElementById("addForm-Container").style.visibility === "visible") {
        document.getElementById("addForm-Container").style.visibility = "hidden"
    }
    else {
        document.getElementById("addForm-Container").style.visibility = "visible"
    }
})     
document.getElementById("addPurseData").addEventListener("submit", (e) => {
        e.preventDefault()
        document.getElementById("addForm-Container").style.visibility = "hidden"
        let purseObj = createPurseObj()
        console.log(purseObj)
        addPurseCard(purseObj)
})
    
function editPurseObj () {    
    let purseObj = {
        id:document.getElementById("jId").value,
        brand: document.getElementById("brand").value,
        style: document.getElementById("style").value,
        color: document.getElementById("color").value,
        size: document.getElementById("size").value,
        img: document.getElementById("purseImg").value,
        desc: document.getElementById("desc").value,
        condition: document.getElementById("condition").value,
        price: document.getElementById("price").value,
        email:document.getElementById("emailSeller").value
    }
    console.log(purseObj)
    return purseObj
}
function createPurseObj () {    
    let purseObj = {
        id:document.getElementById("add-jId").value,
        brand: document.getElementById("add-brand").value,
        style: document.getElementById("add-style").value,
        color: document.getElementById("add-color").value,
        size: document.getElementById("add-size").value,
        img: document.getElementById("add-purseImg").value,
        desc: document.getElementById("add-desc").value,
        condition: document.getElementById("add-condition").value,
        price: document.getElementById("add-price").value,
        email:document.getElementById("add-emailSeller").value
    }
    console.log(purseObj)
    return purseObj
}    //Fetch Requests
    //Using Get fetch all the pursedata
function getAllPurses() {
    fetch("http://localhost:3000/purseData")
        .then(res => {
          if (res.ok) { console.log("GET request successful!!!") }
          else { console.log("GET request unsuccessful") }
          return res
        })
        .then(res => res.json())
        .then(purseData => purseData.forEach(purse => createPurseCard(purse)))
}
   // fetch add purse to the DOM
getAllPurses()

    // This adds new cards to the server.
function addPurseCard(purseObj) {
    fetch("http://localhost:3000/purseData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(purseObj)
    })
        .then(res => {
           if (res.ok) { console.log("POST request successful!!!") }
           else { console.log("POST request unsuccessful") }
           return res
        })        
        .then(res => res.json())
        .then(purseData => console.log("this is it", purseData))
        .then(purseData => createPurseCard(purseData))
        .catch((error) => console.log(error))
}

//Removes deleted cards from server
function removeCardFromServer(id) {
    fetch(`http://localhost:3000/purseData/${id}`, {
        method: 'DELETE',
        headers: {
             "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .then(res => {
       if (res.ok) { console.log("DELETE request successful!!!") }
       else { console.log("DELETE request unsuccessful") }
       return res
    })     
    .catch((error) => console.log(error))
}

function updatePurseData(purse) {
    fetch(`http://localhost:3000/purseData/${purse.id}`, {
        method: 'PUT',
        headers: {
             "Content-Type": "application/json",
        },
        body: JSON.stringify(purse)
    })
    .then(res => {
      if (res.ok) { console.log("PUT request successful!!!") } 
      else { console.log("PUT request unsuccessful") }
      return res
    })    
    .then(res => res.json())
    .then(purse => console.log(purse))
    .catch((error) => console.log(error))
}