function AddToLocalstorage(event)
  {event.preventDefault();
    const Amount = document.getElementById('item').value;
    const Descripation = document.getElementById('item1').value;
     const myobj={
      Amount,
      Descripation
     }
   
     localStorage.setItem(myobj.Descripation,JSON.stringify(myobj));
    showuseronscreen(myobj)
  }

  window.addEventListener("DOMContentLoaded", () => {
   const localStorageObj = localStorage;
   const localstoragekeys  = Object.keys(localStorageObj)

   for(var i =0; i< localstoragekeys.length; i++){
       const key = localstoragekeys[i]
       const userDetailsString = localStorageObj[key];
       const userDetailsObj = JSON.parse(userDetailsString);
      // console.log(userDetailsObj)
       showuseronscreen(userDetailsObj)
    }
  })

 function showuseronscreen(myobj)
 {
    const parentElem=document.getElementById('items')
    const childElem=document.createElement('li')
    childElem.textContent=myobj.Amount + '-' + myobj.Descripation+'  '
    parentElem.appendChild(childElem)

    const deleteButton=document.createElement('input')
    deleteButton.type="button"
    deleteButton.value='Delete'
    deleteButton.onclick = () => {
      localStorage.removeItem(myobj.Descripation)
      
      parentElem.removeChild(childElem)
   }
    //childElem.appendChild(deleteButton)
    
   // parentElem.appendChild(childElem)

    const EditButton=document.createElement('input')
    EditButton.type="button"
    EditButton.value='Edit'
    EditButton.onclick = () => {
      localStorage.removeItem(myobj.Descripation)
      parentElem.removeChild(childElem)
      document.getElementById('item').value=myobj.Amount
      document.getElementById('item1').value=myobj.Descripation
   }
    childElem.appendChild(EditButton)
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
 }
 function editExepnses(Amount,Descripation){
   document.getElementById('item').value = Amount
   document.getElementById('item1').value= Descripation
   //document.getElementById('categ').value = cetegory
   deleteButton(Amount)
}