function Tinh() {
  var x = document.getElementById("x").value;
  var kq = document.getElementById("kq");
  if (!x) alert("Vui lòng nhập số x");
  else if (x.match(/[^0-9]/g) || x < 1) alert("Số x phải nguyên dương");
  else {
    var s = 0;
    while (x) {
      if (x % 2 == 0 && x % 5 == 0) s += parseInt(x);
      x--;
    }
    kq.value = s;
  }
}
