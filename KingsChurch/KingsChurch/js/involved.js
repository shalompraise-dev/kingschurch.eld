const btns = document.querySelectorAll(".serve-card .btn-small");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const card = btn.closest(".serve-card");
    const teamName = card.querySelector("h4")?.innerText.trim() || "our team";

    const modal = document.createElement("div");
    modal.className = "team-modal";
    modal.innerHTML = `
      <div class="team-modal-content">
        <span class="close-modal">&times;</span>
        <h2>Thanks for your interest in ${teamName}!</h2>
        <p>Tell us your name and why you'd love to serve in the ${teamName} team. We'll get back to you soon.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <textarea placeholder="Why do you want to join ${teamName}?" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal on X click
    modal.querySelector(".close-modal").addEventListener("click", () => {
      modal.remove();
    });

    // Optional: handle form submission (just close for now)
    modal.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! We'll be in touch.");
      modal.remove();
    });
  });
});






const connectModal = document.getElementById("connectModal");
  const modalInfoContent = document.getElementById("modalInfoContent");
  const closeModalBtn = document.getElementById("closeModal");

  document.querySelectorAll('.connect-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3')?.innerText.trim();

      let content = '';

      switch (title) {
        case 'Small Groups':
          content = `
            <h2>Small Groups</h2>
            <p>Here’s a list of our Soul Groups. Feel free to join any near you:</p>
            <ul>
              <li><strong>Victory Soul Group</strong> – Mondays 6PM @ Kimumu – Contact: Mary (+254 700 123456)</li>
              <li><strong>Grace Soul Group</strong> – Tuesdays 5:30PM @ Elgon View – Contact: James (+254 721 654321)</li>
              <li><strong>Faith Soul Group</strong> – Thursdays 6PM @ Annex – Contact: Lucy (+254 722 987654)</li>
            </ul>
          `;
          break;

        case 'Events':
          content = `
            <h2>Church Events</h2>
            <p>We regularly host events such as:</p>
            <ul>
              <li>🕊️ Baptism Sunday – Every 3rd Sunday</li>
              <li>🥗 Couples' Dinner – Quarterly Events</li>
              <li>🎉 Youth Hangouts – Every 1st Friday</li>
            </ul>
            <p>Stay tuned on our <a href="/KingsChurch/events.html">Events Page</a> or ask at the info desk.</p>
          `;
          break;

        case 'Kids Ministry':
          content = `
            <h2>Kids Ministry</h2>
            <p>Our Sunday School is split by age:</p>
            <ul>
              <li>💡 Tots (Ages 2–5) – Room A, 10:00 AM</li>
              <li>📘 Juniors (Ages 6–9) – Room B, 10:00 AM</li>
              <li>🎨 Preteens (Ages 10–12) – Room C, 10:00 AM</li>
            </ul>
            <p>Teacher Lead: Ms. Wambui (+254 733 456789)</p>
          `;
          break;

        case 'Youth Ministry':
          content = `
            <h2>Youth Ministry</h2>
            <p>Welcome to The Avenue – our youth movement for teens 13–18:</p>
            <ul>
              <li>⛪ Friday Meetups – 5PM @ Main Hall</li>
              <li>📖 Sunday Service – 10AM in Youth Wing</li>
            </ul>
            <p>Youth Leader: Brian Otieno (+254 735 112233)</p>
          `;
          break;

        default:
          content = `<p>We’re excited to help you get connected!</p>`;
      }

      modalInfoContent.innerHTML = content;
      connectModal.style.display = "flex";
    });
  });

  closeModalBtn.addEventListener('click', () => {
    connectModal.style.display = "none";
  });

  // Close on click outside modal
  window.addEventListener('click', (e) => {
    if (e.target === connectModal) {
      connectModal.style.display = "none";
    }
  });



  

