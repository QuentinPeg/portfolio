function copyEmail() {
    // Créer un élément de texte temporaire
    var tempElement = document.createElement("textarea");
    // Définir la valeur de l'élément à l'adresse e-mail
    tempElement.value = "quentin.peguin@etu.univ-grenoble-alpes.fr";
    // Ajouter l'élément au corps du document
    document.body.appendChild(tempElement);
    // Sélectionner le texte dans l'élément temporaire
    tempElement.select();
    // Copier le texte sélectionné dans le presse-papiers
    document.execCommand("copy");
    // Supprimer l'élément temporaire du document
    document.body.removeChild(tempElement);
    // Afficher une alerte pour confirmer la copie
    alert("Adresse e-mail copiée !");
}


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
                console.log('SUCCESS!', response.status, response.text);
                alert("Message envoyé avec succès !");
                contactForm.reset();  // Réinitialise le formulaire
            })
            .catch(function (error) {
                console.log('FAILED...', error);
                alert("Erreur lors de l'envoi. Réessayez.");
            });
        });
    }
});