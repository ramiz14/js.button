var btn=document.getElementById('btn')
var checkC=false;
var checkN=false;
var ed;
btn.onmouseenter=function run () {
    var inp = document.getElementById('inp').value
    ed=Math.floor(Math.random()*1850)
    if (inp.length>=8) {
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].toUpperCase()===inp[i]) {
                checkC=true;
                break;
            }
        }
        for (let j = 0; j < inp.length; j++) {
            if (!(isNaN(inp[j]))) {
                checkN=true;
                break;
            }
        }
        if (checkC&&checkN) {
            btn.onclick=function login() {
                alert('Logged in successfully')
            }
        }
    }
    else{
        btn.style.left=ed +'px'
    }
}
var icon=document.getElementById('icon')
icon.onclick=function icn() {
    if (icon.className==="fa-solid fa-eye-slash") {
        icon.className="fa-solid fa-eye"
        document.getElementById('inp').type='password'
    }
    else{
        icon.className="fa-solid fa-eye-slash"
        document.getElementById('inp').type='text'
    }
}
