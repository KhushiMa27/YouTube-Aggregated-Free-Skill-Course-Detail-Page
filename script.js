// Video Completion Tracker
document.querySelectorAll('.mark-completed').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const videoItem = this.closest('.video-item');
        videoItem.classList.toggle('completed');
        const nextVideo = videoItem.nextElementSibling;
        if (nextVideo) {
            nextVideo.querySelector('.mark-completed').checked = true;
        }
    });
});

// Save notes
document.querySelector('.save-notes').addEventListener('click', () => {
    const notes = document.querySelector('textarea').value;
    console.log("Notes saved: ", notes);
    alert("Notes saved successfully!");
});

// Progress Tracker
const progress = document.querySelector('.progress');
const progressValue = 30; // Example percentage completion
progress.style.width = progressValue + '%';

// Rate the course
document.querySelector('.submit-rating').addEventListener('click', () => {
    const rating = document.querySelector('#rating').value;
    console.log("Rating submitted: ", rating);
    alert("Thank you for your rating!");
});
