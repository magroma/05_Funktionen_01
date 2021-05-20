
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
    console.log("Hallo Marco!");
}

// Codeblock wird eingeleitet durch "{" und beendet durch "}"

// Funktionsaufruf (call)
//test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() {
    let firstName = "Spencer"; // Variable --> lokal (nur innerhalb des Codeblocks!)
    console.log("Hallo " + firstName + "!"); // refactoring == Umformung von Code ohne dass sich die Darstellung im Ergebnis ändert
}

//ausgabeNamen()
//console.log(firstName); // Fehler --> weil lokale(!!!) Variable

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {

    // wenn firstName leer, dann "nobody"
    if (firstName == undefined || firstName == ""/* || !firstName*/) {              // je nach Anforderung kann es sinnvoller sein, !firstName anstelle von firstName == undefined zu verwenden
        firstName = "Terence Hill"
    }
    
    console.log("Hallo " + firstName + "!"); // refactoring == Umformung von Code ohne dass sich die Darstellung im Ergebnis ändert
}

// ausgabeNamenParam("Spencer"); //Call + Argument(e)
// ausgabeNamenParam("Quentin");
// ausgabeNamenParam("Butch");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("wie heißt Du?"));

/***** Funktionen 02c *****/
// 2c. Parametrisierung + mehrere Parameter

function ausgabeNamenParams(firstName,lastName) {  // Parameter

    // wenn firstName leer, dann "nobody"
    if (firstName == undefined || firstName == ""/* || !firstName*/) {              // je nach Anforderung kann es sinnvoller sein, !firstName anstelle von firstName == undefined zu verwenden
        firstName = "Terence Hill"
    }
    
    console.log("Hallo " + firstName + " " + lastName + "!"); // refactoring == Umformung von Code ohne dass sich die Darstellung im Ergebnis ändert
}

// ausgabeNamenParams("Bud","Spencer");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

/***** Funktionen 03a *****/
// 3a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle
// DRY = Don't repeat yourself!

function ausgabeNamenParams2(firstName,lastName) {  // Parameter

    // 1. Job: string composing
    let gap = " ";
    let outputStr = "Hallo " + firstName + gap + lastName + "!";
    
    // 2. Job: output
    console.log(outputStr); // refactoring == Umformung von Code ohne dass sich die Darstellung im Ergebnis ändert
}

ausgabeNamenParams2("Bud","Spencer");

/***** Funktionen 03b *****/
// 3b. 


