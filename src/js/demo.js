function change_valeur() {
    var select = document.getElementById("color");
    var choice = select.selectedIndex;
    var valeur = select.options[choice].value;
    console.log(valeur);
    document.getElementById('changecolor').className = valeur;
}