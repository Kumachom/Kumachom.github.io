//テキスト追加関数
function addtext(){
    const category = document.getElementById("category").value;
    const select = document.getElementById("select").value.trim();

    if(select){
        const displayArea = document.getElementById("textList");
        displayArea.innerHTML += category + ":" + select + "<br>";  //カテゴリを追加
        document.getElementById("select").value = "";
    }


}

//リセット関数
function resettext(){
    document.getElementById("textList").innerHTML = "";
    document.getElementById("select").value = "";
    document.getElementById("category").selectedIndex = 0;
}