new Vue({
    el: '#app',
    data: {
        activado: true,
        opcion: 1
    }
});

// LA DIFERENCIA ENTRE V-ELSE Y V-SHOW ES QUE V-ELESE
// HACE DESAPARECER EL OBJETO DEL DOM MIENTRAS QUE 
// V-SHOW EN ELEMENTO ESTA DENTRO DEL DOM PERO CON 
// UN DISPLAY NONE

/*
	h1(v-if="activado") Estoy Activado
    h2(v-else) Estoy Desactivado
    template(v-if="opcion == 1")
        hr
        h1 Dentro de un template activado
        p  Lorem ipsum dolor sit amet, justo essent at eum, quo falli soluta ad. At alienum apeirian pro, eu persecuti pertinacia sed, latine perpetua expetendis vix ex. Cu vix justo abhorreant, duo ne erat salutatus. No mollis dissentiet nec.  

    template(v-else)
        h1 Dentro de un template no activado
        p justo essent at eum, quo falli soluta ad. At alienum apeirian pro, eu persecuti pertinacia sed, latine perpetua expetendis vix ex. Cu vix justo abhorreant, duo ne erat salutatus. No mollis dissentiet nec.*/