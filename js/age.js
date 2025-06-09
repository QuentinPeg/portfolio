document.addEventListener("DOMContentLoaded", function () {
            var today = new Date();

    function calculateAge(birthDate) {
        var birthDate = new Date(birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    var birthDate = "2005-02-15"; // date de naissance
    var age = calculateAge(birthDate);
    document.getElementById("age").textContent = age;
    document.getElementById("year").textContent = today.getFullYear();

});