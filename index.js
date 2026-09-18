// ===== EmailJS init =====
(function () {
  emailjs.init("KIJo0BcVt1C1YQDx7"); // ← sem vlož svůj Public Key
})();

// ===== Odeslání formuláře =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");

  if (!form) {
    console.error("Formulář #order-form nebyl nalezen");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gvdjnxs", // SERVICE ID
        "template_m1je51h", // TEMPLATE ID
        form,
      )
      .then(
        function () {
          alert("Zpráva byla úspěšně odeslána!");
          form.reset();
        },
        function (error) {
          alert("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.");
          console.error("EmailJS error:", error);
        },
      );
  });
});
