function kiemtra1() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let du = num1%num2;
    let result="";
    if (du===0)
        result ="A chia het cho B"
    else
        result ="A khong chia het cho B"
    document.getElementById("result").innerHTML="ket qua kiem tra"+ result;


}