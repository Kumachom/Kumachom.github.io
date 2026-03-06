//テキスト追加関数
function addtext(){
    const category = document.getElementById("category").value;
    const select = document.getElementById("select").value.trim();

    if(select){
        const displayArea = document.getElementById("textList");
        displayArea.innerHTML += select + "<br>";
        document.getElementById("select").value = "";
    }
}

//リセット関数
function resettext(){
    document.getElementById("textList").innerHTML ="";
}