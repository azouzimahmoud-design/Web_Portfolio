function validation() {
    var note = 0;
    var solutions = ['b', 'b', 'a', 'b', 'a', 'b', 'a', 'c', 'c', 'b'];


    for (var i = 1; i <= 10; i++) {
        var q = "Q" + i;
        var r = document.getElementsByName(q);
        var choix = "";


        for (var j = 0; j < r.length; j++) {
            if (r[j].checked) {
                choix = r[j].value;
            }
        }
        var bloc = document.getElementById("blocQ" + i);
        if (choix == solutions[i-1]) {
            note = note + 1;
            bloc.style.border = "2px solid green";
        } else {
            bloc.style.border = "2px solid red";
        }
    }

    var res = document.getElementById("resultat");
    res.innerHTML = "Votre note est : " + note + "/10";

    var corr = document.getElementById("correction");
    corr.style.display = "block";
    corr.innerHTML = "Correction : <br> 1-b, 2-b, 3-a, 4-b, 5-a, 6-b, 7-a, 8-c, 9-c, 10-b";
}