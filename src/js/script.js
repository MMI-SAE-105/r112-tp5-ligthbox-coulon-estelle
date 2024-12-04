// *** LIGHTBOX ***
document.getElementById('openDialog').addEventListener('click', function() {
    document.getElementById('lightbox').showModal();
});

document.getElementById('lightbox').addEventListener('click', function() {
    this.close();
});