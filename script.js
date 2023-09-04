function skaiciusSuPVM() {
    var kaina = parseFloat(prompt("Įveskite prekės kainą be PVM:"));
    
    
    if (isNaN(kaina)) {
        alert("Įvesta ne skaičių. Prašome įvesti kainą be PVM.");
        skaiciusSuPVM();
        return;
    }
    
    var pvm = kaina * 0.21;
    var kainaSuPVM = kaina + pvm;
    
    console.log("Prekės kaina su PVM: " + kainaSuPVM.toFixed(2) + "€");
    console.log("PVM: " + pvm.toFixed(2) + "€");
    console.log("Prekės kaina be PVM: " + kaina.toFixed(2) + "€");
}

skaiciusSuPVM();
