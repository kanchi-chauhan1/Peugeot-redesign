(function () {
    function filterLinkChanges() {
        var filterLinkHTML = '<button class="custom-recipe-filter-link">asdf</button>';
        document.querySelector('.sticky-outer-wrapper').insertAdjacentHTML('afterend', filterLinkHTML);
        document.querySelector('.custom-recipe-filter-link').addEventListener('click', function () {
            document.querySelector('header + .container-fluid>div:nth-of-type(2) button').click();
        });
    }

    function veganLabel() {
        document.querySelectorAll('.card-body div .card-text').forEach(function (label) {
           if (label.textContent.trim().toLowerCase() === "vegan" || label.textContent.trim().toLowerCase() === "vegetarian") {
               label.classList.add("custom-veg-label");
           } 
        });
    }

    filterLinkChanges();
    veganLabel();
}());
