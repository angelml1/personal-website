
document.addEventListener("DOMContentLoaded", function () {

    const toggleButton = document.getElementById("theme-toggle");

    
    if (sessionStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        
        if (document.body.classList.contains("dark")) {
            sessionStorage.setItem("theme", "dark");
        } else {
            sessionStorage.setItem("theme", "light");
        }
    });

});
