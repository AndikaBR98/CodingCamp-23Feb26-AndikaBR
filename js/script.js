// Welcome Text
let userName = prompt("Masukan Nama Anda Disini : ");
if (userName) {
  document.getElementById("welcomeText").innerText =
    "Hi " + userName + ", Welcome To Website";
}

// Form Validation
// Form Validation & Submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let nomer = document.getElementById("nomer").value.trim();
    let tanggalLahir = document.getElementById("tanggalLahir").value.trim();
    let message = document.getElementById("messageText").value;

    let jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');

    if (!name || !email || !nomer || !tanggalLahir || !message || !jenisKelamin) {
        alert("All fields must be filled!");
        return;
    }

    let now = new Date();

    let tanggalInput = now.toLocaleDateString("id-ID");
    let jamInput = now.toLocaleTimeString("id-ID");

    // Escape HTML security
    let formattedMessage = message
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    document.getElementById("result").innerHTML = `
        <h3>PESAN</h3>
        <br>
        <p><strong>Current time:</strong> ${tanggalInput} - ${jamInput}</p>
        <br>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Nama:</strong> ${email}</p>
        <p><strong>Nama:</strong> ${nomer}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin.value}</p>
        <p><strong>Pesan:</strong></p>
        <p>${formattedMessage}</p>
    `;

    this.reset();
});