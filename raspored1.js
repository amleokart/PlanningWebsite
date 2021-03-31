
  var raspored1 = {
      trenutniCas: function(divRaspored, trenutnoVrijeme) {
        var divRaspored=document.getElementById("sadrzaj");
        trenutnoVrijeme1=new Date();
        var n1=trenutnoVrijeme.getHours();
        var element1 = document.getElementsByClassName("aktivnost1");
        if(n1==13) {
            for (var x = 0; x < element1.length; x++) {
            element1[x].style.backgroundColor="green";
            element1[x].style.border="3";
        }
      } 
      }
  }
  var vrijeme = {
      divRaspored=document.getElementById("sadrzaj"),
      trenutnoVrijeme1=new Date("2020-12-20T13:00")
  }
  raspored1.trenutniCas(divRaspored, "2020-12-20T13:00");