//テキスト追加関数
function addtext(){
    const category = document.getElementById("category").value;
    const select = document.getElementById("select").value.trim();

    if(select){
        const displayArea = document.getElementById("display-area");
        displayArea.innerHTML += select + "<br>";
        document.getElementById("select").value = "";
    }
}