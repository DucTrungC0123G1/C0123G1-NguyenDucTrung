function kiemtra() {
let Weight = document.getElementById("Weight").value;
let Height  = document.getElementById("Height").value;
let IBM = Weight/(Height*Height);
let Result ="";
if (IBM<18)
    Result ="Gay"
    else if (IBM<25)
        Result="Binh Thuong"
    else if (IBM<30)
        Result="Hoi Beo"
    else
        Result="Rat Beo"
    document.getElementById("Result").innerHTML="Chi So IBM cua Ban La: "  + IBM +"   "
        +"Tinh Trang Co The: "  + Result;
}