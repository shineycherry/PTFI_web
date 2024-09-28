document.addEventListener("DOMContentLoaded", function () {
    const matchButton = document.querySelector('.match-button');
    if (matchButton) {
        matchButton.addEventListener('click', function (event) {
            event.preventDefault();
            alert("Matching process started!");
        });
    }
});
