
// Script for search bar functionality

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;


inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];

    console.log(userData); // remove logs

    if(userData){

        emptyArray = searchNames.filter((data)=>{
            return data.toLocaleLowerCase().match(userData.toLocaleLowerCase());  //filtering data with matching user entered data
        });

        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;  // passing return data inside li tag
        });

        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");  //adding suggestion to search box
        }
    }
    else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        dataChange(selectData);
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }
    else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
