document.addEventListener("DOMContentLoaded", function () {
    let username = "albani.sailan"; // Ganti dengan username kamu
    let instaFeed = document.getElementById("insta-videos");

    let embedHTML = `
        <iframe src="https://www.instagram.com/${username}/embed/" scrolling="no"></iframe>
    `;
    
    instaFeed.innerHTML = embedHTML;
});
