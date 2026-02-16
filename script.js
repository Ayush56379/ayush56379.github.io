document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue = searchInput.value.toLowerCase();
            const palaceCards = document.querySelectorAll(".palace-card");

            palaceCards.forEach(function (card) {

                const title = card.querySelector(".card-title").innerText.toLowerCase();
                const text = card.querySelector(".card-text").innerText.toLowerCase();

                if (title.includes(searchValue) || text.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});
