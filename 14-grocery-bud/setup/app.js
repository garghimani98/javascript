// ****** SELECT ITEMS **********
const alert=document.querySelector(".alert");

const form=document.querySelector(".grocery-form");

const grocery=document.getElementById("grocery");

const submitBtn=document.querySelector(".submit-btn");

const container=document.querySelector(".grocery-container");

const list=document.querySelector(".grocery-list");

const clearBtn=document.querySelector(".clear-btn");

let editElement;
let editFlag=false;
let editID="";








// edit option

// ****** EVENT LISTENERS **********
//Adding item
form.addEventListener('submit',addItem);
//Clearing all items
clearBtn.addEventListener('click',clearItems);
//load items
window.addEventListener('DOMContentLoaded',setupItems);
//Edit item
//delete item

// ****** FUNCTIONS **********


function addItem(e){
    e.preventDefault();
    //to get value
    const value=grocery.value;
    //To get id 
    const id=new Date().getTime().toString();
   
    console.log(id);
    
    if(value && !editFlag){
        console.log("add item to the list");
        createListItem(id,value);
        //display alert
        displayAlert("element added to the list","success");
        //show container
        container.classList.add("show-container");
        //add to local storage 

        addToLocalStorage(id,value);

        //set back to default
        setBackToDefault();
    }
    else if(value && editFlag) {
       console.log("editing");
       editElement.innerHTML=value;
       displayAlert("value changed","success");
       editLocalStorage(editID,value);
       setBackToDefault();
    }
    else{
         console.log("empty value");
         displayAlert("please enter value","danger");
    }
}

function clearItems()
{
    const items=document.querySelectorAll(".grocery-item");
    if(items.length>0){
    items.forEach(function(item){
        list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list","danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

//delete item
function deleteItem(e){
    const element=e.currentTarget.parentElement.parentElement;
    const id=element.dataset.id;
    //removeFromLocalStorage(id);
   // console.log(element);
    list.removeChild(element);
    if(list.children.length===0)
    {
        container.classList.remove("show-container");
        displayAlert("empty list","danger");
    }
    displayAlert("item removed","danger");
    setBackToDefault();
    removeFromLocalStorage(id);
    console.log("delete item");
}

//edit item
function editItem(e){
    const element=e.currentTarget.parentElement.parentElement;
    const editID=element.dataset.id;
    // set edit element
    const editElement=e.currentTarget.parentElement.previousElementSibling;
    //set edit flag
    editFlag=true;
    //set edit value
    grocery.value=editElement.innerHTML;
    submitBtn.textContent="edit";


    console.log("edit item");
}
//display alert
function displayAlert(text,action)
{
    alert.textContent=text;
    alert.classList.add(`alert-${action}`);
    //remove alert after 1sec
    setTimeout(function(){
    alert.textContent="";
    alert.classList.remove(`alert-${action}`);
    },1000);
}


function setBackToDefault(){
    console.log("set back to default");
    grocery.value="";
    editFlag=false;
    editID="";
    submitBtn.textContent="submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    const grocery={id,value};
    console.log(grocery);
    let items=getLocalStorage();
     // adding new item to items array
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
   

}


function getLocalStorage()
{
    return localStorage.getItem("list")?localStorage.getItem("list"):[];
   // localStorage.setItem("list",JSON.stringify("items"));
}
function removeFromLocalStorage(id){
    let items=getLocalStorage();
    items=items.filter(function(item){
        if(item.id!==id)
        {
            return item;
        }
    });
    //list--in which items will be sent //items-data to be sent
  localStorage.setItem("list",JSON.stringify(items));
   
}
function editLocalStorage(id,value){
    //local storage API
    //set Item
    //get item
    //remove item
    //save as strings
    const items=getLocalStorage();
    items=items.map(function(item){
        if(item.id===id)
        {
            item.value=value;
        }
           return item;
    });
    localStorage.setItem("list",JSON.stringify("item"));
    //localStorage.setItem("orange",JSON.stringify(['item','item2']));
    //const oranges=JSON.parse(localStorage.getItem("orange"));
   // console.log(oranges);
   // localStorage.removeItem("orange");

}
// ****** SETUP ITEMS **********
function setupItems(){
    let items=getLocalStorage();
    if(items.length>0)
    {
        items.forEach(function(item){
           createListItem(item.id,item.value)
        });
        container.classList.add("show-container");
    }

}

function createListItem(id,value){
        const element=document.createElement('article');
        //add class
       
        //add id
        const attr=document.createAttribute('data-id');
        attr.value=id;
        element.setAttributeNode(attr);
        element.classList.add('grocery-item');
        element.innerHTML=`<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
             <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
        </div>`;
        //delete btn as delete and edit buttons are dynamic 
        //because they appear on the addingan item to the list
        const deleteBtn=element.querySelector(".delete-btn");
        //edit btn
        const editBtn=element.querySelector(".edit-btn");
        
        deleteBtn.addEventListener('click',deleteItem(element.id));
        editBtn.addEventListener('click',editItem);
        
        //append child
        list.appendChild(element);
}