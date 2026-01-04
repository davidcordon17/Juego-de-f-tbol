let money = 0;
let shoot = 1;

// Referencias al HTML
const moneySpan = document.getElementById("money");
const shootSpan = document.getElementById("shoot");
const trainBtn = document.getElementById("trainBtn");

// Botón entrenar
trainBtn.addEventListener("click", () => {
    money += shoot;
    shoot += 1;
});
const shootBar = document.getElementById("shootBar");
shootBar.style.width = Math.min(shoot * 5, 100) + "%"; // cada 20 tiro llega al 100%


// Dinero automático cada segundo
setInterval(() => {
    money += shoot;
    updateUI();
    saveGame(); // guarda la partida automáticamente
}, 1000);
setInterval(() => {
    money += shoot;
    updateUI();
    saveGame(); // guarda cada segundo
}, 1000);

// Actualizar pantalla
function updateUI() {
    moneySpan.textContent = Math.floor(money);
    shootSpan.textContent = shoot;
}

// REFERENCIAS A LOS BOTONES DE MEJORAS
const coachBtn = document.getElementById("coachBtn");
const gymBtn = document.getElementById("gymBtn");

// Precios iniciales
let coachPrice = 100;
let gymPrice = 500;

// Mejora Entrenador
coachBtn.addEventListener("click", () => {
    if(money >= coachPrice){
        money -= coachPrice;
        shoot += 1;  
        coachPrice = Math.floor(coachPrice * 1.5);
        coachBtn.textContent = `Entrenador (${coachPrice} €)`;
        updateUI();
    }
});
coachBtn.addEventListener("click", () => {
    if(money >= coachPrice){
        money -= coachPrice;
        shoot += 1;
        coachPrice = Math.floor(coachPrice * 1.5);
        coachBtn.textContent = `Entrenador (${coachPrice} €)`;
        updateUI();
        saveGame(); // guardar partida
    }
});

gymBtn.addEventListener("click", () => {
    if(money >= gymPrice){
        money -= gymPrice;
        shoot += 5;
        gymPrice = Math.floor(gymPrice * 1.5);
        gymBtn.textContent = `Gimnasio (${gymPrice} €)`;
        updateUI();
        saveGame(); // guardar partida
    }
});

// Mejora Gimnasio
gymBtn.addEventListener("click", () => {
    if(money >= gymPrice){
        money -= gymPrice;
        shoot += 5;  
        gymPrice = Math.floor(gymPrice * 1.5);
        gymBtn.textContent = `Gimnasio (${gymPrice} €)`;
        updateUI();
    }
});
// Guardar partida en localStorage
function saveGame() {
    const saveData = {
        money: money,
        shoot: shoot,
        coachPrice: coachPrice,
        gymPrice: gymPrice
    };
    localStorage.setItem("futbolistaSave", JSON.stringify(saveData));
}
