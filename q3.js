var today = new Date();

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

function makeToDo() {
 
    newOne.todo = form1.todo.value;
    newOne.date1 = form1.date1.value;
}


form1.addEventListener('submit', function doit(event) {
    // console.log("2");
    event.preventDefault();
    // console.log("3");
    if (event.target.id) {
    // console.log("4");
    //    var inputToDo= document.getElementById('todo');
    //    localStorage.setItem('myData2',inputToDo );

    FormData.get(todo);
    // Data.all.push(Data);
    makeToDo();
    console.log(makeToDo);


    }
}
);
makeToDo();

array1 = [];
function setToLocal() {
    var x = JSON.stringify(array1);
    localStorage.setItem('myData', x);

}
setToLocal();

array2 = [];
function getFromLocal() {

    var z = localStorage.getItem('myData');
    if (z) {
        array2 = JSON.parse(z);
    }
}




