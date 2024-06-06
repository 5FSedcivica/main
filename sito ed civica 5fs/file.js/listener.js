
const contentFunctions = {
    'Inquinamento': updateInquinamentoContent,
    'Riscaldamento Globale': updateRiscaldamentoGlobaleContent,
    'LCA': updateLCAContent,
    'Depauperamento' : updateDepauperamentoContent,
    'Home': updateHomeContent
};

// Add click event listener to the navigation items
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-link')) {
        // Get the text content of the clicked item
        const selectedItem = event.target.textContent.trim();

        // Call the corresponding function based on the selected item
        if (contentFunctions[selectedItem]) {
            contentFunctions[selectedItem]();
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    updateHomeContent();
  });

$(document).ready(function() {
    $('#accordionExample').on('show.bs.collapse', function (e) {
        $(e.target).prev('.card-header').find('.icon').text('-');
        $(e.target).find('.card-body').css('animation', 'slideInLeft 0.5s ease-in-out');
    });
    $('#accordionExample').on('hide.bs.collapse', function (e) {
        $(e.target).prev('.card-header').find('.icon').text('+');
    });
});

AOS.init({
    duration: 1000,
});