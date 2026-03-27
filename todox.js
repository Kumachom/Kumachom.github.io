//TODO追加関数
function addTODO(){
    const category=document.getElementById("category").value;
    const date=document.getElementById("date").value;
    const inputTODO=document.getElementById("inputTODO").value.trim();

    if(!inputTODO || !date){
        alert("日付とTODOを入力してください");
        return;
    }

    const todoList=document.getElementById("todoList");

    //新しいリスト要素を作成
    const ListItem=document.createElement("li");
    ListItem.innerHTML=`<span> ${date}| ${category} ${inputTODO}</span>
        <button class="delete-button" onclick="deleteTODO(this)">削除</button>`;
    todoList.appendChild(ListItem);

    //入力リセット
    document.getElementById("inputTODO").value="";
    document.getElementById("date").value="";
}

//TODO削除関数
function resetTODO(){
    document.getElementById("todoList").innerHTML="";
    document.getElementById("inputTODO").value="";
    document.getElementById("date").value="";
    document.getElementById("category").selectedIndex=0;
}

//個別TODO削除関数
function deleteTODO(button){
    const ListItem=button.parentElement;
    ListItem.remove();
}