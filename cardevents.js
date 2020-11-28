if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

//Event Handling function
function ready(){
    boardDiv = document.getElementsByClassName('board')[0]
    
    document.getElementById('add-list-btn').addEventListener('click',addList)  
    var dialog = document.getElementById('dialog')
   // dialog.style.display = 'none'
    
   // document.getElementById('add-card-btn').addEventListener('click',addCard)
   var t = document.getElementsByClassName('add-card-btn')
   for(var i=0;i<t.length;i++){
       t[i].addEventListener('click',addCard)
   }
   //Create a dialog to show card details
   var cardOnClick = document.getElementsByClassName('card')
   for(var i=0;i<cardOnClick.length;i++){
        cardOnClick[i].onclick = ()=>{
            dialog.style.display = 'block'
        }
    }
   document.getElementsByClassName('dialog-close')[0].onclick = function(){
       dialog.style.display = 'none'
   }
   //Display the user comments
   document.getElementById('add-comment-btn').onclick = () =>{
       addComments()
   }
   //To delete the list of cards
   var listDeleteBtn = document.getElementsByClassName('delete-list-btn')
   for(var i=0; i<listDeleteBtn.length; i++){
       listDeleteBtn[i].onclick = (event)=>{
            event.target.parentElement.remove()
       }
   }
}

//Adding a new List
function addList(event){
    var listDiv = document.getElementsByClassName('list')[0]
    var btn = event.target.parentElement
    //var clone = listDiv.cloneNode(true)
    //boardDiv.insertBefore(clone,btn)
    var listContent =`
    <div id="list" class="list">
        <button class="delete-list-btn">Delete this List</button>
        <div id="card" class="card">
            <div class="card-main-div">
                <h2>Card 1</h2>
                <p>Sample Card</p>
            </div>
        </div>
        <div>
            <button id="add-card-btn" class='add-card-btn'>Add Card</button>
        </div>
    </div>`
    var listDiv = document.createElement('div')
    listDiv.innerHTML = listContent
    boardDiv.insertBefore(listDiv,btn)
    ready()
}

//Adding a new Card
function addCard(event){
    var btn = event.target.parentElement
    var cardDiv = document.getElementsByClassName('card')[0]
    var clone = cardDiv.cloneNode(true)
    btn.parentElement.insertBefore(clone,btn)
    ready()
}

//To Add Comments and its time
function addComments(event){
    var comment = document.getElementById('card-comment-input')
    if(comment.value==''){
        return
    }
    var date = new Date()
    document.getElementsByClassName('date')[0].innerHTML = date.toDateString()+' '+date.toLocaleTimeString()
    var commentTarget = document.getElementsByClassName('comment-target')[0]
    
    let value = comment.value
    commentTarget.innerHTML = comment.value
}
