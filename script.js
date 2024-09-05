

// Get modal element
var articleModal = document.getElementById("articleModal");
// Get open modal button
var articleLink = document.querySelector('.article a');
// Get close button
var closeBtn = document.querySelector('.modal .close');
// Listen for open click
articleLink.onclick = function (event) {
    event.preventDefault();
    articleModal.style.display = "block";
}
// Listen for close click
closeBtn.onclick = function () {
    articleModal.style.display = "none";
}
// Listen for outside click
window.onclick = function (event) {
    if (event.target == articleModal) {
        articleModal.style.display = "none";
    }
}
