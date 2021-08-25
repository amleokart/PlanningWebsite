
  var raspored2 = {
    trenutniCas: function(divRaspored, trenutnoVrijeme) {
      var divRaspored=document.getElementById("sadrzaj");
      trenutnoVrijeme=new Date();
      var n2=trenutnoVrijeme.getHours();
      var element2 = document.getElementsByClassName("aktivnost2");
      if(n2==10) {
          for (var x = 0; x < element2.length; x++) {
          element2[x].style.backgroundColor="green";
          element2[x].style.border="3";
      }
    } 
    }
}
var vrijeme = {
    divRaspored=document.getElementById("sadrzaj"),
    trenutnoVrijeme2=new Date("2020-12-07T10:00")
}
raspored2.trenutniCas(divRaspored, "2020-12-07T10:00");