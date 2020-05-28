
/*
créé un Oscillateur avec valeures de base
*/
let tone1 = $('#btnC').attr('data-id');  //set à C3 (Do)
let forme1 = "sine1";
let osc1 = new Tone.Oscillator(tone1, forme1).toMaster();
//osc1.fadeOut = 2; //TODO ?

/*
bouton play
*/
$('#play-btn').click(function() {
// document.querySelector('#play-btn').addEventListener('click', function() {
    //init context pour avoir le droit de jouer du son
    Tone.context.resume();

    //joue le son en lui même
    osc1.start();
});

/*
bouton stop
*/
document.querySelector('#stop-btn').addEventListener('click', function() {
    //..
    osc1.stop();
});

function updateValue(newVal) {
    //applique le changement
    osc1.frequency.value = newVal;

    // mettre à jour la valeur de l'input
//    $('#input-value').text(val) = newVal;

    // mettre à jour la position du slider
    // $(sliderObj).val() = $(this).attr('data-id'); //TODO !
    //> faire dans un fonction ou un watcher de la valeur pour set en slider

    console.log(osc1.frequency.value);
}

/*
watch les changement du slider
*/
$('#range').change(function() {
    updateValue($(this).val());
});

/*
watch les changement des boutons
 */
$('.tones').click(function() {
    updateValue($(this).attr('data-id'));
});

/*
watch les changement de l'input
*/
$('#input-value').change(function() {
    updateValue($(this).val());
});