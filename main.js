document.addEventListener("DOMContentLoaded", () => {
    class Contract {
      constructor(name, premium) {
        this.name = name;
        this.premium = premium;
      }
    }
  
    class ContractService {
      constructor() {
        this.contracts = [];
      }
  
      addContract(name, premium) {
        const contract = new Contract(name, premium);
        this.contracts.push(contract);
      }
  
      getContracts() {
        return this.contracts;
      }
    }
  
    const contractService = new ContractService();
    const form = document.getElementById("contract-form");
    const nameInput = document.getElementById("name");
    const premiumInput = document.getElementById("premium");
    const list = document.getElementById("contract-list");
  
    function renderContracts() {
      list.innerHTML = "";
      contractService.getContracts().forEach((contract) => {
        const li = document.createElement("li");
        li.textContent = `${contract.name} - $${contract.premium}`;
        list.appendChild(li);
      });
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const premium = parseFloat(premiumInput.value);
  
      console.log("name:", name);
      console.log("premiumInput.value:", premiumInput.value);
      console.log("parsed premium:", premium);
  
      if (!name || isNaN(premium) || premium <= 0) {
        alert("Por favor, introduce un nombre válido y una prima numérica mayor a 0.");
        return;
      }
  
      contractService.addContract(name, premium);
      renderContracts();
      form.reset();
    });
  });
  