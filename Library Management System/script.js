
let count=0;
let poppedBook=false;
let poppedAuthor=false;
let poppedPub=false;
let array;
let s,s2,s3=false;

const UpdateInfo = () => {
     
          if(s && s2 && s3){
          count++;
          window.localStorage.setItem('BookName'.concat(count), document.getElementById('bname').value);
          window.localStorage.setItem('AuthorName'.concat(count), document.getElementById('aname').value);
          window.localStorage.setItem('PublisherName'.concat(count), document.getElementById('pname').value);
          window.localStorage.setItem('Date'.concat(count), document.getElementById('pd').value);
          
          array=[window.localStorage.getItem('BookName'.concat(count)),window.localStorage.getItem('AuthorName'.concat(count)),
          window.localStorage.getItem('PublisherName'.concat(count)),window.localStorage.getItem('Date'.concat(count))];


          // insert new row.
          let MyTable = document.getElementById("BooksID");
          let NewRow = MyTable.insertRow(1);
          let Newcell1 = NewRow.insertCell(0);
          let Newcell2 = NewRow.insertCell(1);
          let Newcell3 = NewRow.insertCell(2);
          let Newcell4 = NewRow.insertCell(3);
          Newcell1.innerHTML =  array[0];
          Newcell2.innerHTML = array[1];
          Newcell3.innerHTML = array[2]; 
          Newcell4.innerHTML = array[3];

          let MyTable2 = document.getElementById("authors");

        let NewRow2 = MyTable2.insertRow(1);
        let Newcell5 = NewRow2.insertCell(0);
        let Newcell6 = NewRow2.insertCell(1);
          Newcell5.innerHTML =  array[1];
          Newcell6.innerHTML = array[0];


          let MyTable3 = document.getElementById("publishers");
          let NewRow3 = MyTable3.insertRow(1);
          let Newcell7 = NewRow3.insertCell(0);
          let Newcell8 = NewRow3.insertCell(1);
          Newcell7.innerHTML = array[2];
          Newcell8.innerHTML = array[0];

          const makeServerRequest = new Promise((resolve, reject) => {
   
            if(s) {
              resolve("We got the data");
            } else {	
              reject("Data not received");
            }
          });
          
          makeServerRequest.then(result => {
            document.getElementById("prompt2").innerHTML = "Data Updated Successfully!";
          });
          
          makeServerRequest.catch(error => {
            document.getElementById("prompt2").innerHTML = "Sorry book not found :(";
          });
        }
        }
   
const Enter = () => {
  let MyTable = document.getElementById("BooksID");
  let val=document.getElementById('bname3').value;

  let index=-1;
 
  for (let row4 of MyTable.rows) 
  {
  index++;
    for(let cell of row4.cells) 
    {
       let value = cell.innerText;
       if(value==val){
         document.getElementById('BooksID').deleteRow(index);
         s=true;
       }
      }

      const makeServerRequest = new Promise((resolve, reject) => {
   
        if(s) {
          resolve("We got the data");
        } else {	
          reject("Data not received");
        }
      });
      
      makeServerRequest.then(result => {
        document.getElementById("prompt1").innerHTML = "Book Found. Enter Updated Data...";
      });
      
      makeServerRequest.catch(error => {
        document.getElementById("prompt1").innerHTML = "Sorry book not found :(";
      });
    }
//*************************************************************************** */
    let MyTable2 = document.getElementById("authors");

  let index2=-1;
 
  for (let row4 of MyTable2.rows) 
  {
  index2++;
    for(let cell of row4.cells) 
    {
       let value2 = cell.innerText;
       if(value2==val){
         document.getElementById('authors').deleteRow(index2);
         s2=true;
       }
      }
    }
//*************************************************************************** */
let MyTable3 = document.getElementById("publishers");

let index3=-1;

for (let row4 of MyTable3.rows) 
{
index3++;
for(let cell of row4.cells) 
{
let value3 = cell.innerText;
if(value3==val){
document.getElementById('publishers').deleteRow(index3);
s3=true;
}
}
}
}
        const addBook = () => {
      
          let MyTable = document.getElementById("BooksID");

              let val=document.getElementById('bname2').value;
       
      let index=-1;
      
      let s=true;
      for (let row4 of MyTable.rows) 
      {
      index++;
        for(let cell of row4.cells) 
        {
           let value = cell.innerText;
           if(value==val){
            s=false;
           }
          }
        }
        
        if(s){
          count++;
          window.localStorage.setItem('BookName'.concat(count), document.getElementById('bname2').value);
          window.localStorage.setItem('AuthorName'.concat(count), document.getElementById('aname2').value);
          window.localStorage.setItem('PublisherName'.concat(count), document.getElementById('pname2').value );
          window.localStorage.setItem('Date'.concat(count), document.getElementById('pd2').value );
          
          array=[window.localStorage.getItem('BookName'.concat(count)),window.localStorage.getItem('AuthorName'.concat(count)),
          window.localStorage.getItem('PublisherName'.concat(count)),window.localStorage.getItem('Date'.concat(count))];


          // insert new row.
          let NewRow = MyTable.insertRow(1);
          let Newcell1 = NewRow.insertCell(0);
          let Newcell2 = NewRow.insertCell(1);
          let Newcell3 = NewRow.insertCell(2);
          let Newcell4 = NewRow.insertCell(3);
          Newcell1.innerHTML =  array[0];
          Newcell2.innerHTML = array[1];
          Newcell3.innerHTML = array[2]; 
          Newcell4.innerHTML = array[3];

          let MyTable2 = document.getElementById("authors");

        let NewRow2 = MyTable2.insertRow(4);
        let Newcell5 = NewRow2.insertCell(0);
        let Newcell6 = NewRow2.insertCell(1);
          Newcell5.innerHTML =  array[1];
          Newcell6.innerHTML = array[0];


          let MyTable3 = document.getElementById("publishers");

          let NewRow3 = MyTable3.insertRow(4);
          let Newcell7 = NewRow3.insertCell(0);
          let Newcell8 = NewRow3.insertCell(1);
          Newcell7.innerHTML = array[2];
          Newcell8.innerHTML = array[0];
         }
        

         const makeServerRequest = new Promise((resolve, reject) => {
   
          if(s) {
            resolve("We got the data");
          } else {	
            reject("Data not received");
          }
        });
        
        makeServerRequest.then(result => {
          document.getElementById("prompt3").innerHTML = "Book Added Successfully!";
        });
        
        makeServerRequest.catch(error => {
          document.getElementById("prompt3").innerHTML = "Sorry book already present!";
        });
        }
   
      

      const DeleteBook = () => {
        let val=document.getElementById('fname').value ;

        let table = document.getElementById("BooksID");
 
let index=-1;

let s=false;
for (let row4 of table.rows) 
{
index++;
  for(let cell of row4.cells) 
  {
     let value = cell.innerText;
     if(value==val){
      s=true;
      document.getElementById('BooksID').deleteRow(index);
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let value2=localStorage.getItem(key);
        if(value2==val){
          window.localStorage.removeItem(key);
          let lastItem=key.substring(8,9);
          window.localStorage.removeItem('AuthorName'.concat(lastItem));
          window.localStorage.removeItem('PublisherName'.concat(lastItem));
          window.localStorage.removeItem('Date'.concat(lastItem));
        }
    }
     
     
     }
    }
  }



/*********************************************************/
  const makeServerRequest = new Promise((resolve, reject) => {
   
    if(s) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    document.getElementById("demo").innerHTML = "Book deleted successfully :)";
  });
  
  makeServerRequest.catch(error => {
    document.getElementById("demo").innerHTML = "Sorry book not found :(";
  });
/**********************************************************/

let table2 = document.getElementById("authors");
 
let index2=-1;
for (let row2 of table2.rows) 
{
index2++;
  for(let cell of row2.cells) 
  {
     let value = cell.innerText;
     if(value==val){
    
      document.getElementById('authors').deleteRow(index2);
     } // your code below
  }
}

let table3 = document.getElementById("publishers");
 
let index3=-1;
for (let row3 of table3.rows) 
{
index3++;
  for(let cell of row3.cells) 
  {
     let value = cell.innerText;
     if(value==val){
  
     document.getElementById('publishers').deleteRow(index3);
     } // your code below
  }
}
}


    const DeleteAuthor = () => {
      let f=false;
      let val=document.getElementById('fname1').value 

let table = document.getElementById("authors");

let index=-1;
for (let row of table.rows) 
{
index++;
for(let cell of row.cells) 
{
let value = cell.innerText;
if(value==val){
  f=true;
  document.getElementById('authors').deleteRow(index);


  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let value2=localStorage.getItem(key);
    if(value2==val){
      window.localStorage.removeItem(key);
      let lastItem=key.substring(10,11);
      window.localStorage.removeItem('BookName'.concat(lastItem));
      window.localStorage.removeItem('PublisherName'.concat(lastItem));
      window.localStorage.removeItem('Date'.concat(lastItem));
    }
}
} // your code below
}
}

const makeServerRequest = new Promise((resolve, reject) => {
   
  if(f) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  document.getElementById("demo2").innerHTML = "Author deleted successfully :)";
});

makeServerRequest.catch(error => {
  document.getElementById("demo2").innerHTML = "Sorry author not found :(";
});

let table2 = document.getElementById("BooksID");

let index2=-1;
for (let row of table2.rows) 
{
index2++;
for(let cell of row.cells) 
{
let value = cell.innerText;
if(value==val){
  document.getElementById('BooksID').deleteRow(index2);

} // your code below
}
}
    }
 


const popUpDelete = () => {

  if(poppedBook==false){
  document.getElementById("third").style.display = "block";
  poppedBook=true;
  }else{
    document.getElementById("third").style.display = "none";
    poppedBook=false;
  }
}
const popUpDeleteAuthor = () => {

  if(poppedAuthor==false){
  document.getElementById("third4").style.display = "block";
  poppedAuthor=true;
  }else{
    document.getElementById("third4").style.display = "none";
    poppedAuthor=false;
  }
}
const popUpDeletePublisher = () => {

  if(poppedPub==false){
  document.getElementById("third3").style.display = "block";
  poppedPub=true;
  }else{
    document.getElementById("third3").style.display = "none";
    poppedPub=false;
  }
}
const popUpUpdate = () => {

  if(poppedBook==false){
  document.getElementById("fourth").style.display = "block";
  poppedBook=true;
  }else{
    document.getElementById("fourth").style.display = "none";
    poppedBook=false;
  }
}
const popUpAdd = () => {

  if(poppedBook==false){
  document.getElementById("fifth").style.display = "block";
  poppedBook=true;
  }else{
    document.getElementById("fifth").style.display = "none";
    poppedBook=false;
  }
}

    

     const DeletePublisher = () => {
      let f=false;
     let val=document.getElementById('fname2').value 

let table = document.getElementById("publishers");

let index=-1;
for (let row of table.rows) 
{
index++;
for(let cell of row.cells) 
{
let value = cell.innerText;
if(value==val){
  f=true;
  document.getElementById('publishers').deleteRow(index);

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let value2=localStorage.getItem(key);
    if(value2==val){
      window.localStorage.removeItem(key);
      let lastItem=key.substring(13,14);
      window.localStorage.removeItem('BookName'.concat(lastItem));
      window.localStorage.removeItem('AuthorName'.concat(lastItem));
      window.localStorage.removeItem('Date'.concat(lastItem));
    }
}
} // your code below
}
}
const makeServerRequest = new Promise((resolve, reject) => {
   
  if(f) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  document.getElementById("demo3").innerHTML = "Publisher deleted successfully :)";
});

makeServerRequest.catch(error => {
  document.getElementById("demo3").innerHTML = "Sorry Publisher not found :(";
});

let table2 = document.getElementById("BooksID");

let index2=-1;
for (let row of table2.rows) 
{
index2++;
for(let cell of row.cells) 
{
let value = cell.innerText;
if(value==val){
  document.getElementById('BooksID').deleteRow(index2);

} // your code below
}
}
   }
  

