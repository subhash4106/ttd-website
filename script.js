function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}


function toggleInfo(index) {
  const allInfos = document.querySelectorAll('.service-info');
  allInfos[index].style.display =
    allInfos[index].style.display === 'block' ? 'none' : 'block';
}


document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const tickets = document.getElementById("tickets").value;
    const type = document.getElementById("type").value;

    if (!name || !email || !date || !tickets || !type) {
      confirmation.innerHTML = `<strong>Please fill out all fields correctly.</strong>`;
      confirmation.style.color = "red";
      confirmation.style.display = "block";
      return;
    }

    confirmation.innerHTML = `
      <strong>Thank you, ${name}!</strong><br>
      Your booking for <strong>${tickets}</strong> ticket(s) on <strong>${date}</strong> for <strong>${type}</strong> darshan has been confirmed.<br>
      A confirmation email will be sent to <strong>${email}</strong>.
    `;
    confirmation.style.color = "green";
    confirmation.style.display = "block";

    bookingForm.reset();
  });
});
