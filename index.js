var inp = document.querySelector(".taskname");
var list = document.querySelector(".tasklist");
var addTask = document.querySelector(".btnTask");
var taskClear = document.querySelector(".btnClear");
var taskList = [];
// var taskname = [];


function render(elements) {
    list.innerHTML = '';
    elements.forEach(e => {
        let newE1 = document.createElement('li');
        newE1.innerHTML = e;
        newE1.classList.add('list-group-item');
        list.appendChild(newE1);

    })
}

addTask.addEventListener('click', e => {
    if (inp.value !== '') {
        taskList.unshift(inp.value +" ");
        inp.value = "";
        render(taskList);
        taskClear.getElementsByClassName.display = "block";
        localStorage.setItem("mylist", JSON.stringify(taskList));

    }
    else {
        alert("please fill mendetory field");
    }
});


let saved = localStorage.getItem('mylist');
if (saved) {
    taskList = JSON.parse(localStorage.getItem('mylist'));
    render(taskList);
}
else {
    taskClear.getElementsByClassName.display = 'none';
}

taskClear.addEventListener('click',function(){
    localStorage.clear();
    list.innerHTML ="";
    taskList = [];
    taskClear.getElementsByClassName.display = 'none';

});
////////555555555555555555555555555555555555555555555555555555555555555555555
var current_page = 1;
var records_per_page =7;

//var taskList = []; 

// Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable"); 
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML +=  taskList[i] + "<br>";
    }
    console.log(taskList);

    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "disabled";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "disabled";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(taskList.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};

