//テキスト追加関数
function addtext(){
    const category = document.getElementById("category").value;
    const select = document.getElementById("inputText").value.trim();

    if(select){
        const displayArea = document.getElementById("textList");
        displayArea.innerHTML += category + ":" + select + "<br>";  //カテゴリを追加
        document.getElementById("inputText").value = "";
    }


}

//リセット関数
function resettext(){
    document.getElementById("textList").innerHTML = "";
    document.getElementById("inputText").value = "";
    document.getElementById("category").selectedIndex = 0;
}

//テキスト削除関数
function deletetext(){
    const Item = GamepadButton.parentElement;
    Item.remove();
}