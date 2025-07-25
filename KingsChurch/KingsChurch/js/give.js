const giveButtons = document.querySelectorAll('.give-btn');
const modal = document.getElementById('giveModal');
const modalContent = document.getElementById('giveDetails');
const closeModal = document.querySelector('.close-give-modal');

const paybill = "400200";
const account = "884788";

const groupData = {
  monthly: {
    Men: { amount: "KES 1,000", phone: "0711111111" },
    Women: { amount: "KES 500", phone: "0722222222" },
    Youth: { amount: "KES 200", phone: "0733333333" }
  },
  programs: [
    { name: "Youth Camp", contact: "0730000000" },
    { name: "Women's Conference", contact: "0720000000" }
  ],
  projects: [
    { name: "Church Roof", amount: "KES 50,000", contact: "0740000000" },
    { name: "Children Wing", amount: "KES 20,000", contact: "0750000000" }
  ]
};

giveButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.parentElement.getAttribute('data-type');
    modal.style.display = 'block';

    let content = "";

    switch(type) {
      case "offerings":
        content = `<h3>Offerings</h3><p>Paybill: <strong>${paybill}</strong><br>Account: <strong>${account}</strong></p>`;
        break;
      case "tithes":
        content = `<h3>Tithes</h3><p>Paybill: <strong>${paybill}</strong><br>Account: <strong>${account}</strong></p>
        <p>After payment, kindly forward the M-PESA message with your full name to: <strong>0711822615 - Jimmy Elungata</strong></p>`;
        break;
      case "thanksgiving":
        content = `<h3>Thanksgiving / Sacrifice</h3><p>Paybill: <strong>${paybill}</strong><br>Account: <strong>${account}</strong></p>`;
        break;
      case "missions":
        content = `<h3>Mission Support</h3><p>Paybill: <strong>400200</strong><br>Account: <strong>MISSION</strong></p>`;
        break;
      case "programs":
        content = `<h3>Special Programs</h3><ul>${groupData.programs.map(p => `<li>${p.name} – Contact: ${p.contact}</li>`).join('')}</ul>`;
        break;
      case "monthly":
        content = `<h3>Monthly Contributions</h3><ul>${Object.entries(groupData.monthly).map(([group, info]) => `<li>${group}: ${info.amount}, Send to ${info.phone}</li>`).join('')}</ul>`;
        break;
      case "projects":
        content = `<h3>Projects & Fundraisers</h3><ul>${groupData.projects.map(p => `<li>${p.name} – Goal: ${p.amount}, Contact: ${p.contact}</li>`).join('')}</ul>`;
        break;
      default:
        content = `<p>Giving info unavailable. Please contact the church office.</p>`;
    }

    modalContent.innerHTML = content;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
});
