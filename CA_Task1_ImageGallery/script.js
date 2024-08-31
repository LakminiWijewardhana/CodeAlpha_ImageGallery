var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");
var galleryItems = document.getElementsByClassName("gallery-item");
var currentIndex = 0;

for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].getElementsByTagName("img")[0].onclick = function(index) {
        return function() {
            currentIndex = index;
            openModal();
        };
    }(i);
}

function openModal() {
    modal.style.display = "block";
    modalImg.src = galleryItems[currentIndex].getElementsByTagName("img")[0].src;
    captionText.innerHTML = galleryItems[currentIndex].getElementsByTagName("img")[0].alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("prev").onclick = function() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openModal();
}

document.getElementById("next").onclick = function() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openModal();
}
//Next Page button
document.getElementById("nextPage").onclick = function() {
    alert("Next Page clicked!");
};
