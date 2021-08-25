
  var raspored3 = {
    trenutniCas: function(divRaspored, trenutnoVrijeme) {
      var divRaspored=document.getElementById("sadrzaj");
      trenutnoVrijeme=new Date();
      var n3=trenutnoVrijeme.getHours();
      var element3 = document.getElementsByClassName("aktivnost2");
      if(n3==15) {
          for (var x = 0; x < element3.length; x++) {
          element3[x].style.backgroundColor="green";
          element3[x].style.border="3";
      }
    } 
    }
}
var vrijeme = {
    divRaspored=document.getElementById("sadrzaj"),
    trenutnoVrijeme3=new Date("2020-12-15T15:00")
}
raspored3.trenutniCas(divRaspored, "2020-12-15T15:00");