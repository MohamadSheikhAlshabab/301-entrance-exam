var today = new Date();
var array1 = [];

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById('datte').innerHTML = date;

Data.all = [];
function Data(todo, date1) {
    this.todo = todo;
    this.date1 = date1;
    Data.all.push(this);
};

// console.log("ttttt");
// for (var i = 0; i < 5; i++) {
    body: new FormData(form1)
// }
// console.log("eeeeee");
// array3=[];
// array4=[];
var newOne = new Data();
  newOne.todo;
 newOne.date1;

function makeToDo() {
 
    newOne.todo = form1.todo.value;
    newOne.date1 = form1.date1.value;
    array1.push(newOne.todo,newOne.date1);
}


form1.addEventListener('submit', function doit(event) {
    // console.log("2");
    event.preventDefault();
    // console.log("3");
    if (event.target.id) {
    // console.log("4");
       var list2= document.getElementById('list2');
    //    localStorage.setItem('myData2',inputToDo );

    // FormData.get(todo);
    // Data.all.push(Data);
    // makeToDo();
 
// var ul1 =document.createElement('ul');
// ul1.appendChild(list2);
//  var li1 =document.createElement('li');
//  li1.appendChild(ul1);
//  li1.textContent=newOne.todo;
 console.log(newOne.todo);

//  var li2 =document.createElement('li');
//  li2.appendChild(ul1);
//  li2.textContent=newOne.date1;
 console.log(newOne.date1);
 console.log(array1);


    }
}
);
makeToDo();



console.log(array1);
function setToLocal() {
    var x = JSON.stringify(array1);
    localStorage.setItem('myData', x);

}
setToLocal();

var     array2 = [];
function getFromLocal() {

    var z = localStorage.getItem('myData');
    if (z) {
        array2 = JSON.parse(z);
    }
}




