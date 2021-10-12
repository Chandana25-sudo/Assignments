

class TodoMain{
  constructor(todoListelement){
    this.todoListelement = todoListelement;
  }
  addtodo() {
    console.log('add clicked');
    //grab the text that is entered
    const todoText = document.getElementById('grabText').value;
    console.log(todoText);
    if(todoText == "") {
        return;
    } else {
        const todoObject = {
            id : todoList.length,
            todoText: todoText,
            isDone : false 
        };
        console.log(todoObject);
        todoList.unshift(todoObject);
        console.log(todoList);
        //display the added task
        this.displaytodos();
    }

  }

  displaytodos(){
    console.log('display todos function');
    this.todoListelement.innerHTML = "";
    document.querySelector('#grabText').value = "";
    //render list items inside in ul
    todoList.forEach((item) => {

        // console.log(item.todoText);
        const listele = document.createElement('li');
        
        listele.innerHTML = item.todoText;
        console.log(listele);
        const delBtn = document.createElement('i');
        delBtn.setAttribute("data-id",item.id)
        // const i = document.createElement('i');
        
        delBtn.setAttribute('class','fa fa-trash-o');
        // i.setAttribute('onclick','deletelist()');
        if(item.isDone) {
            listele.setAttribute('class','checked');
            // i.style.display = "none";
            // listele.style.display = "hidden";   
        } 
        // else {
        //     listele.setAttribute('class','un-checked');
        // }

        listele.setAttribute("data-id",item.id)
        
        //add event to list item
        listele.addEventListener("click",function(e) {
            
            const selectedID =  e.target.getAttribute("data-id");
            console.log(selectedID);
            todo.doneToDo(selectedID);
        
            
          })
          delBtn.addEventListener('click',function(e) {
            const delId = e.target.getAttribute('data-id');
            todo.deletelist(delId);
         //    console.log(delId);
         })
         
       
        //   delBtn.appendChild(i);
        listele.appendChild(delBtn);
        this.todoListelement.appendChild(listele);
    })

  }
  doneToDo(selectedID) {
    
    const selectedIdIndex = todoList.findIndex((item) => item.id == selectedID)
    if(selectedIdIndex < 0) {
        return;
    } else {
    // console.log(todoList[selectedIdIndex]);
        todoList[selectedIdIndex].isDone ? (todoList[selectedIdIndex].isDone = false) : (todoList[selectedIdIndex].isDone = true);
        console.log(todoList[selectedIdIndex]);
        
        todo.displaytodos();
    }    
     
  }
  deletelist(delId) {
    const deleteIndex = todoList.findIndex((item) => item.id == delId);
   todoList.splice(deleteIndex,1);
   todo.displaytodos();
  }
}
const todoList = [];  //creating an empty array
const todoListelement = document.querySelector('#listitems');  //ul tag seelcted with queryselector and assigned to variable
console.log(todoListelement); //checking the todoListelement
const todo = new TodoMain(todoListelement);
//taking input field and adding addeventlistener
document.querySelector('#grabText').addEventListener("keydown",function(e) {
    // console.log(e);
    if(e.keyCode == 13) {
        console.log('hi');
        todo.addtodo();
    }
});

