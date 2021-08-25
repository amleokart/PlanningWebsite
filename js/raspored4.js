
  var raspored4 = {
    trenutniCas: function(divRaspored, trenutnoVrijeme) {
      var divRaspored=document.getElementById("sadrzaj");
      trenutnoVrijeme=new Date();
      var n4=trenutnoVrijeme.getHours();
      var element4 = document.getElementsByClassName("aktivnost2");
      if(n4==19) {
          for (var x = 0; x < element4.length; x++) {
          element4[x].style.backgroundColor="green";
          element4[x].style.border="3";
      }
    } 
    }
}
var vrijeme = {
    divRaspored=document.getElementById("sadrzaj"),
    trenutnoVrijeme4=new Date("2021-01-08T19:00")
}
raspored4.trenutniCas(divRaspored, "2021-01-08T19:00");