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
   

    content.append(h4, p1, p2, p3, p4, p5,butn1, butn2, butn3, butn4, email)
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
        //console.log("before", purse)
        //enter information into the edit form
        document.getElementById("purseBrand").value = purse.brand
        //console.log(purse.brand)
        document.getElementById("style").value = purse.style
        // console.log(purse.style)
        document.getElementById("color").value = purse.color
        // console.log(purse.color)
        document.getElementById("size").value = purse.size
        // console.log(purse.size)
        document.getElementById("purseImg").value = purse.img
        // console.log(purse.img)
        document.getElementById("condition").value = purse.condition
        // console.log(purse.condition)
        document.getElementById("desc").value = purse.desc
        // console.log(purse.desc)
        document.getElementById("price").value = purse.price
        // console.log(purse.price)
        document.getElementById("emailSeller").value = purse.email
        // console.log(purse.email)
        document.getElementById("jId").value = purse.id
       
        document.getElementById("addPurseInfo").addEventListener("submit", (e) => {
            e.preventDefault()
            console.log(document.getElementById("emailSeller").value)
            document.getElementById("editForm-Container").style.visibility = "hidden"
            console.log("before again", purse)
            let purseObj = editPurseObj()
            console.log("after", purseObj)
            updatePurseData(purseObj)
        })
    }   
    
    function contactSeller() {
       window.location = `mailto:${purse.email}?Subject=${purse.brand}: ${purse.style}`
        
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

    function displayDesc() {
        if (document.getElementById("square").style.visibility === "") {
            document.getElementById("square").style.visibility = "hidden"
            document.getElementById("displayDesc").style.visibility = "visible"
            document.getElementById("closeButn").style.visibility="visible"
            document.getElementById("displayDesc").textContent = purse.desc
        }
    }
    
    document.getElementById("closeButn").addEventListener("click", (e) => {
        document.getElementById("square").style.visibility = ""
        document.getElementById("displayDesc").style.visibility = "hidden"
        document.getElementById("closeButn").style.visibility="hidden"
    })
       
} //createPurseCard
getAllPurses()

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

function getPurseObject(id) {
    console.log("what is id",id)
    fetch(`http://localhost:3000/purseData/${id}`)
        .then(res => {
          if (res.ok) { console.log("GET request successful!!!") }
          else { console.log("GET request unsuccessful") }
          return res
        })
        .then(res => res.json())
        .then(purseData => console.log("data from server", purseData))
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