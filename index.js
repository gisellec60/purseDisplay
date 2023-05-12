function createPurseCard(purse) {
     //Build Purse
    let card = document.createElement("div")
    card.className = 'card'
    card.id = `card-${purse.id}`
    let purseImage = document.createElement("img")
    purseImage.src = purse.img
    
    purseImage.className = "purseImage"
    purseImage.id = `purseImg-${purse.id}`
    let content = document.createElement("div")
    content.className = "purse"

    let h4 = document.createElement("h4")
    h4.className = "brand"
    h4.id=`brand-${purse.id}`
    h4.textContent = `${purse.brand}`

    let p1 = document.createElement("p")
    p1.id=`style-${purse.id}`
    p1.textContent = `${purse.style}`

    let p2 = document.createElement("p")
    p2.id=`color-${purse.id}`
    p2.textContent = `Color:${purse.color}`
    
    let p3 = document.createElement("p")
    p3.id=`size-${purse.id}`
    p3.textContent = `Size: ${purse.size}`

    let p4 = document.createElement("p")
    p4.id=`condition-${purse.id}`
    p4.textContent = `Condition: ${purse.condition}`
    
    let p5 = document.createElement("p")
    p5.id=`price-${purse.id}`
    p5.textContent = `Price: $${purse.price}.00`
    
    let p6 = document.createElement("p")
    p6.id = `desc-${purse.id}`
    p6.textContent = `desc: ${purse.description}`
   
    let butn1 = document.createElement("button")
    butn1.className = "avail"
    butn1.id = `butn1-${purse.id}`
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
    butn4.textContent = "Contact"

    let email = document.createElement("a")
    email.id = `email-${purse.id}`
    email.href = `mailto:${purse.email}`
    //email.textContent="Send Email"
  
    butn1.addEventListener("click", toggleAvailable)
    butn2.addEventListener("click", editCard)
    butn3.addEventListener("click", deleteCard)
    butn4.addEventListener("click", contactSeller)
    purseImage.addEventListener("click", displayDesc)
   

    content.append(h4, p1, p3, p4, p5,butn1, butn2, butn3, butn4, email)
    card.append(purseImage, content)
    //add pusre to DOM
    document.querySelector("#square").appendChild(card)

    function deleteCard() {
        card.remove()
        removeCardFromServer(purse.id)
    }
    
    function editCard() {
        //get the card information from the server:
        getPurseObject(purse.id)
        //make Edit Form visible
        if (document.getElementById("editForm-Container").style.visibility === "visible") {
            document.getElementById("editForm-Container").style.visibility = "hidden"
        }
        else {
            document.getElementById("editForm-Container").style.visibility = "visible"
        }
        //enter information into the edit form
        document.getElementById("purseBrand").value = purse.brand
        document.getElementById("style").value = purse.style
        document.getElementById("color").value = purse.color
        document.getElementById("size").value = purse.size
        document.getElementById("purseImg").value = purse.img
        document.getElementById("condition").value = purse.condition
        document.getElementById("desc").value = purse.desc
        document.getElementById("price").value = purse.price
        document.getElementById("emailSeller").value = purse.email
        document.getElementById("jId").value = purse.id
       //submit information to the editPurseObj to create an updated Obj        
        document.getElementById("addPurseInfo").addEventListener("submit", (e) => {
            e.preventDefault()
            document.getElementById("editForm-Container").style.visibility = "hidden"
            let purseObj = editPurseObj()
            //upate purse data on server
            updatePurseData(purseObj)
        })
    }   
    //Send email to seller. 
    function contactSeller() {
       window.location = `mailto:${purse.email}?Subject=${purse.brand}: ${purse.style}`
    }
    //toggle between available and unavialble
    function toggleAvailable(e) {
       if (e.target.innerText === "Available") {
            e.target.innerText = "Uavailable"
            //  document.getElementById(`butn2-${purse.id}`).disabled = true;
            //  document.getElementById(`butn3-${purse.id}`).disabled = true;
        } else {
            e.target.innerText = "Available"
            //  document.getElementById(`butn2-${purse.id}`).disabled = false;
            //  document.getElementById(`butn3-${purse.id}`).disabled = false;
        }
    }    
    //display description when purse image is clicked. 
    function displayDesc() {
        if (document.getElementById("square").style.visibility === "") {
            document.getElementById("square").style.visibility = "hidden"
            document.getElementById("displayDesc").style.visibility = "visible"
            document.getElementById("closeButn").style.visibility="visible"
            document.getElementById("displayDesc").textContent = purse.desc
        }
    }
    // close descripton box when the close button is clicked
    document.getElementById("closeButn").addEventListener("click", (e) => {
        document.getElementById("square").style.visibility = ""
        document.getElementById("displayDesc").style.visibility = "hidden"
        document.getElementById("closeButn").style.visibility="hidden"
    })

} //createPurseCard
//get all purses from server
getAllPurses()
// Toggle between Customer and Admin Views
document.getElementById("admin").addEventListener("click", (e) => {
    const avail = document.getElementsByClassName("avail")
    const ebutn = document.getElementsByClassName("edit")
    const debutn = document.getElementsByClassName("delete")
    const addPurse = document.getElementById("addPurseButn")
    //change view button 
    if (e.target.innerHTML === "Customer") {
        e.target.innerHTML = "Admin"
        addPurse.style.visibility="visible"
    }
    else {
        e.target.innerHTML = "Customer"
        addPurse.style.visibility="hidden"
    }
    availButn(avail)
    visButn(ebutn,debutn)
})

function availButn(avail) {
    for (const element of avail) {
        if (element.disabled === false){
            element.disabled = true
        }else {
        element.disabled = false
        }
    }
    return
}

function visButn(butn1, butn2) {
    let butnArray=[butn1, butn2]
    for (const item of butnArray){
      for (const element of item) {
           console.log("ths is element for butn1", element)  
          if (element.style.visibility === "" || element.style.visibility === "visible") {
              console.log("top here")
              element.style.visibility = "hidden"
              console.log(element.style.visibility)
          } else {
              console.log("bottom here")
              element.style.visibility = "visible"
              console.log(element.style.visibility)
          }    }    
    } 
    return
}

document.getElementById("addPurseButn").addEventListener("click", (e) => {
    if (document.getElementById("addForm-Container").style.visibility === "visible") {
        document.getElementById("addForm-Container").style.visibility = "hidden"
    }
    else {
        document.getElementById("addForm-Container").style.visibility = "visible"
    }
})   
//submit data to create purse object then to then to be added to server 
document.getElementById("addPurseData").addEventListener("submit", (e) => {
        e.preventDefault()
        document.getElementById("addForm-Container").style.visibility = "hidden"
        let purseObj = createPurseObj()
        addPurseCard(purseObj)
})
//create new object with updated   
function editPurseObj() { 
    let purseObj = {
        id:document.getElementById("jId").value,
        brand: document.getElementById("purseBrand").value,
        style: document.getElementById("style").value,
        color: document.getElementById("color").value,
        size: document.getElementById("size").value,
        img: document.getElementById("purseImg").value,
        desc: document.getElementById("desc").value,
        condition: document.getElementById("condition").value,
        price: document.getElementById("price").value,
        email:document.getElementById("emailSeller").value
    }
    return purseObj
}
//Create new Object and send to server
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
    return purseObj
}
//Fetch Requests
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

//Get a particular card from server for editing
function getPurseObject(id) {
    fetch(`http://localhost:3000/purseData/${id}`)
        .then(res => {
          if (res.ok) { console.log("GET request successful!!!") }
          else { console.log("GET request unsuccessful") }
          return res
        })
        .then(res => res.json())
        .then(purseData => console.log(purseData))
}

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