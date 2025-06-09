document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les groupes "Lire la suite"
    const readMoreSections = document.querySelectorAll('.grpspecification');
    
    readMoreSections.forEach((section, index) => {
        // Trouve la checkbox et le label dans la section actuelle
        const checkbox = section.querySelector('.lire-suite-checkbox');
        const label = section.querySelector('.lire-suite-label');
        
        if (checkbox && label) {
            // Génère un ID unique (ex: lireSuite1, lireSuite2...)
            const uniqueId = 'lireSuite' + (index + 1);
            
            // Applique l'ID à la checkbox et au label
            checkbox.id = uniqueId;
            label.setAttribute('for', uniqueId);
        }
    });
});