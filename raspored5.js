
  var raspored5 = {
    trenutniCas: function(divRaspored, trenutnoVrijeme) {
      var divRaspored=document.getElementById("sadrzaj");
      trenutnoVrijeme=new Date();
      var n5=trenutnoVrijeme.getHours();
      var element5 = document.getElementsByClassName("aktivnost2");
      if(n5==14) {
          for (var x = 0; x < element5.length; x++) {
          element5[x].style.backgroundColor="green";
          element5[x].style.border="3";
      }
    } 
    }
}
var vrijeme = {
    divRaspored=document.getElementById("sadrzaj"),
    trenutnoVrijeme5=new Date("2021-01-06T14:59")
}
raspored4.trenutniCas(divRaspored, "2021-01-06T14:59");