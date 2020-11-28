/**var cardAddBtn = document.getElementsByClassName('add-card-btn')[0]
cardAddBtn.addEventListener('click',function(){
    var divChange = document.getElementsByClassName('div1')[0]
    var divChange1 = `<button class='add-card-btn'>Card</button>`
    divChange.innerHTML=divChange1
})
**/
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

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
   var cardOnClick = document.getElementsByClassName('card')
   for(var i=0;i<cardOnClick.length;i++){
        cardOnClick[i].onclick = ()=>{
            dialog.style.display = 'block'
        }
    }
   document.getElementsByClassName('dialog-close')[0].onclick = function(){
       dialog.style.display = 'none'
   }
   document.getElementById('add-comment-btn').onclick = () =>{
        var date = new Date()
        document.getElementsByClassName('date')[0].innerHTML = date.toDateString()+' '+date.toLocaleTimeString()
        var commentTarget = document.getElementsByClassName('comment-target')[0]
        var comment = document.getElementById('card-comment-input')
        let value = comment.value
      //  commentTarget. = value

   }
   var listDeleteBtn = document.getElementsByClassName('delete-list-btn')
   for(var i=0; i<listDeleteBtn.length; i++){
       listDeleteBtn[i].onclick = (event)=>{
            event.target.parentElement.remove()
       }
   }
}

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
                <h1 id="card=title">Card 1</h1>
                <p id="card-description">Sample Card</p>
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

function addCard(event){
    var btn = event.target.parentElement
    var cardDiv = document.getElementsByClassName('card')[0]
    var clone = cardDiv.cloneNode(true)
    btn.parentElement.insertBefore(clone,btn)
    ready()
}