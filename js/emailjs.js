document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("fF2Ie6GtG1pIakaeG");  // Initialisez avec votre User ID

    const contactForm = document.querySelector('.contact-form');  // Ciblez le formulaire
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Récupération des valeurs du formulaire
            const formData = {
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                message: document.querySelector("#message").value
            };

            // Envoi via EmailJS
            emailjs.send("service_7ytleyo", "template_rj3w3fa", {
                sendername: formData.name,
                replyto: formData.email,
                message: formData.message || 'Pas de message spécifié'
            })
            .then(function (response) {
                alert("Message envoyé avec succès !");
                contactForm.reset();  // Réinitialise le formulaire
            })
            .catch(function (error) {
                alert("Erreur lors de l'envoi. Réessayez.");
            });
        });
    }
});