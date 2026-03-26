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
    ListItem.innerHTML=`<span> ${date}| ${category} ${inputTODO}</span>;
        <button onclick="resetTODO(this)">削除</button>`;
    todoList.appendChild(ListItem);

    //入力リセット
    document.getElementById("inputTODO").value="";
    document.getElementById("date").value="";
}