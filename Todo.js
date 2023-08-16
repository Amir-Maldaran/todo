let $ = document;

let inputTodo = $.getElementById("inputTodo");
let iconInput = $.querySelector(".fa-thumbtack");

const tagThs = $.querySelectorAll(".tab");
let ulTodo = $.getElementById("ulList");

let iconTrashs = $.querySelectorAll(".fa-trash-can");
let iconChecks = $.querySelectorAll(".fa-check");

let todo = $.querySelectorAll("td")[0];
let done = $.querySelectorAll("td")[1];
let undone = $.querySelectorAll("td")[2];
let numberOfTodo = 0;
let numberOfDone = 0;
let numberOfUndone = 0;


function addTodo(key) {
   
    if (key.keyCode == 13 || key.target.className == "fas fa-thumbtack") {

        let textTodo = inputTodo.value;
        if (textTodo == "") {
            return;
        }
        todo.innerHTML = ++numberOfTodo ;
        undone.innerHTML = ++numberOfUndone ;
        let IconTrash = $.createElement("i");
        let IconCheck = $.createElement("i");
        IconTrash.className = "fas fa-trash-can";
        IconCheck.className = "fas fa-check";
        IconTrash.addEventListener("click" , function () {
        
            IconTrash.parentNode.parentNode.parentNode.className = "liList removed-item";
            setTimeout( function () {
            IconTrash.parentNode.parentNode.parentNode.remove();
            },600);
            todo.innerHTML = --numberOfTodo ;

            if (IconCheck.parentNode.firstElementChild.className == "fas fa-check") {
                undone.innerHTML = --numberOfUndone ;
            
            } else {
                
                done.innerHTML = --numberOfDone ;
            }
        });

        let tagSpanForTextTodo = $.createElement("span");
        tagSpanForTextTodo.innerHTML = textTodo;

        IconCheck.addEventListener("click" , function () {
        
            if (IconCheck.className == "fas fa-check") {

                IconCheck.className = "fas fa-close";
                IconCheck.parentNode.parentNode.parentNode.firstElementChild.className = "strike";
                IconCheck.parentNode.parentNode.parentNode.style.backgroundColor = "#c3ae34";
                done.innerHTML = ++numberOfDone ;
                undone.innerHTML = --numberOfUndone ;
    
            } else if (IconCheck.className == "fas fa-close") {
                
                IconCheck.className = "fas fa-check";
                IconCheck.parentNode.parentNode.parentNode.firstElementChild.className = "";
                IconCheck.parentNode.parentNode.parentNode.style.backgroundColor = "#ffe035";
                done.innerHTML = --numberOfDone ;
                undone.innerHTML = ++numberOfUndone ;
            }
            
        });
        let boxCheckAndDelete = $.createElement("div");
        boxCheckAndDelete.className = "boxCheckAndDelete";
        boxCheckAndDelete.appendChild(IconCheck);
        boxCheckAndDelete.appendChild(IconTrash);
        let tagDivTimeAndKey = $.createElement("div");
        tagDivTimeAndKey.className = "timeAndKey";
        let tagSpanForDate = $.createElement("date");
        tagSpanForDate.className = "date";
        const d = new Date();
        tagSpanForDate.innerHTML = d.getFullYear() + "/" + d.getMonth() + "/" 
        + d.getDay() + " " + d.getHours() + ":" + d.getMinutes();
        
        tagDivTimeAndKey.appendChild(tagSpanForDate);
        tagDivTimeAndKey.appendChild(boxCheckAndDelete);
        let tagLi = $.createElement("li");
        tagLi.className = "liList restored-item";
        tagLi.appendChild(tagSpanForTextTodo);
        tagLi.appendChild(tagDivTimeAndKey);
        tagLi.style.opacity = "0";
        ulTodo.insertBefore( tagLi , ulTodo.firstChild );

    }
};

inputTodo.addEventListener( "keyup" , addTodo );

iconInput.addEventListener( "click" , addTodo );


tagThs.forEach(function (params , index) {

    params.addEventListener("click" , function () {

        let liTodo = $.querySelectorAll(".liList");
        let thFirstChild = $.querySelector("th:first-child");

        if (index == 0) {
            thFirstChild.style.setProperty("--left" , "0%");
           
            liTodo.forEach(function (params) {
                
                params.style.display = "list-item";
                params.className = "liList restored-item";
            });
        }
        if (index == 1) {
            thFirstChild.style.setProperty("--left" , "105%");
            
            liTodo.forEach( function (params) {
                
                if (params.firstElementChild.className == "strike") {
                    
                    params.className = "liList restored-item";
                    params.style.display = "list-item";
                    
                } else {
                    
                    
                    params.className = "liList liList removed-item";
                    setTimeout(function () {
                        
                        params.style.display = "none";
                    },750);
                }
            });
        }
        if (index == 2) {
            thFirstChild.style.setProperty("--left" , "230%");

            liTodo.forEach( function (params) {
                
                if (params.firstElementChild.className == "strike") {
                    
                    params.className = "liList liList removed-item";
                    setTimeout(function () {
                        
                        params.style.display = "none";
                    },750);
                
                } else {
                    
                    params.className = "liList restored-item";
                    params.style.display = "list-item";
                }
            });
        }       
    });

});








// console.log(tagThs);











// iconTrashs.forEach(function (params) {
    
//     params.addEventListener("click" , function () {
        
//         params.parentNode.parentNode.parentNode.className = "liList removed-item";
//         setTimeout( function () {
//             params.parentNode.parentNode.parentNode.remove();
//             },600);
//     });

// });



// iconChecks.forEach(function (params) {
    
//     params.addEventListener("click" , function () {
        
//         if (params.className == "fas fa-check") {

//             params.className = "fas fa-close";
//             params.parentNode.parentNode.parentNode.firstElementChild.className = "strike";
//             params.parentNode.parentNode.parentNode.style.backgroundColor = "#c3ae34";

//         } else if (params.className == "fas fa-close") {
            
//             params.className = "fas fa-check";
//             params.parentNode.parentNode.parentNode.firstElementChild.className = "";
//             params.parentNode.parentNode.parentNode.style.backgroundColor = "#ffe035";

//         }
       
//     });

// });
