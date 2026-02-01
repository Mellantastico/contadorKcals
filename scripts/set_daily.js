// --- SET DAILY GOAL (solo corre si existe el input/boton) ---
const goalInput = document.getElementById("misKcals");
const saveBtn = document.getElementById("saveKcals");

const saved = localStorage.getItem("dailyGoalKcal");
if (saved) goalInput.value = saved;

saveBtn.addEventListener("click", () => {
    const val = Number(goalInput.value);

    if (!Number.isFinite(val) || val <= 0) {
      alert("Ingresá un número válido (ej: 2000).");
      return;
    }

    localStorage.setItem("dailyGoalKcal", String(val));
    window.location.href = "../index.html";
  });
 
  

