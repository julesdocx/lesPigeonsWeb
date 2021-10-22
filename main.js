function openLanguage(language) {
    var i;
    var x = document.getElementsByClassName("language");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(language).style.display = "block";

    var j;
    var k = document.getElementsByClassName("card-button");
    for (j = 0; j < x.length; j++) {
        k[j].classList.remove('active');
    }
    document.getElementById(language + '-button').classList.add('active');
}