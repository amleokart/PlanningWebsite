let pretraga = (function () {
    let postaviElemente = function (predmeti) {
        let postavljeni = [];
        predmeti = document.querySelectorAll(".pr");
        for (let i = 0; i < predmeti.length; i++) {
            postavljeni[i] = predmeti[i];
        }
    }
    let filtrirajTip = function (tip) {
    }


    let filtrirajPredmet = function (nazivPredmeta) { 
        let filter, table, prvaCelija, drugaCelija, i, tekst;
        nazivPredmeta = document.getElementById("unosPredmet");
        filter = nazivPredmeta.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.querySelectorAll(".red");
        for (i = 0; i < tr.length; i++) {
            prvaCelija = tr[i].getElementsByTagName("td")[0]
            drugaCelija = tr[i].getElementsByTagName("td")[1];
            trecaCelija = tr[i].getElementsByTagName("td")[2];
            cetvrtaCelija = tr[i].getElementsByTagName("td")[3];
            if (prvaCelija) {
                postavljeni = prvaCelija.textContent || prvaCelija.innerText;
                tekst = drugaCelija.textContent || drugaCelija.innerText ||
                drugaCelija.textContent || drugaCelija.innerText ||
                trecaCelija.textContent || trecaCelija.innerText || 
                cetvrtaCelija.textContent || cetvrtaCelija.innerText;
                postavljeni = postavljeni + tekst;
                if (postavljeni.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; 
                } else {
                    if (postavljeni == " ") continue;
                    tr[i].style.display = "none";
                }
            }
        }
    }
    
    return {
        postaviElemente: postaviElemente,
        filtrirajPredmet: filtrirajPredmet,
        filtrirajTip: filtrirajTip
    }
}());