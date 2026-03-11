//テキスト追加関数
function addtext(){
    const category = document.getElementById("category").value;
    const select = document.getElementById("inputText").value.trim();
    const date = document.getElementById("date").value;

    if(select){
        const displayArea = document.getElementById("textList");

        const item = document.createElement("div");     //1行作る
        item.innerHTML = date + "|" +category + ":" + select + ' <button onclick = "deletetext(this)">削除</button>';
        
        displayArea.appendChild(item); 

        document.getElementById("inputText").value = "";
    }


}

//リセット関数
function resettext(){
    document.getElementById("textList").innerHTML = "";
    document.getElementById("inputText").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("date").value = "";
}

//テキスト削除関数
function deletetext(button){
    const item = button.parentElement;
    item.remove();
}

