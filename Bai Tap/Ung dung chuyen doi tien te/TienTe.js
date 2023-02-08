
function Chuyendoi() {
    let Amount = document.getElementById("Amount").value;
    let To = document.getElementById("To").value;
    let From = document.getElementById("From").value;
    let Result
    if (From == "USD"&& To == "VND"){
        Result = Amount * 23000 + "  VND";
    }
    else if ( From == "VND" && To =="USD"){
        Result= Amount/23000 + " USD";
    }
    else {
        Result = " Xin Nhap lai ";
    }
    document.getElementById("Result").innerHTML=Result;
}
