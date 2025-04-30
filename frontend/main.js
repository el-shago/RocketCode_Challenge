document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contract-form");
    const nameInput = document.getElementById("name");
    const premiumInput = document.getElementById("premium");
    const list = document.getElementById("contract-list");
  
    async function fetchContracts() {
      const res = await fetch('http://localhost:3000/api/contracts');
      return await res.json();
    }
  
    async function renderContracts() {
      const contracts = await fetchContracts();
      list.innerHTML = "";
      contracts.forEach(contract => {
        const li = document.createElement("li");
        li.textContent = `${contract.name} - $${contract.premium_amount}`;
        list.appendChild(li);
      });
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const premium = parseFloat(premiumInput.value);
  
      if (!name || isNaN(premium) || premium <= 0) {
        alert("Por favor, introduce un nombre válido y una prima válida.");
        return;
      }
  
      await fetch('http://localhost:3000/api/contracts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, premium })
      });
  
      renderContracts();
      form.reset();
    });
  
    renderContracts();
  });
  