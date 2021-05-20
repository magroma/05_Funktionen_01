
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

ausgabeNamen()
console.log(firstName); // Fehler --> weil lokale(!!!) Variable