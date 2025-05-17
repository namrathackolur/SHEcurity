document.addEventListener('DOMContentLoaded', function () {
    // Profile Page Functionality
    const profileForm = document.getElementById('profile-form');
    const profileList = document.getElementById('profile-list');

    profileForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const skill = document.getElementById('skill').value;
        const contact = document.getElementById('contact').value;
        const photo = document.getElementById('photo').files[0];

        if (name && skill && contact && photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profileCard = document.createElement('div');
                profileCard.className = 'profile-card';
                profileCard.innerHTML = `
                    <img src="${e.target.result}" alt="${name}">
                    <h3>${name}</h3>
                    <p>Skill: ${skill}</p>
                    <p>Contact: ${contact}</p>
                `;
                profileList.appendChild(profileCard);
                profileForm.reset();
                document.getElementById('profile-message').innerText = 'Profile saved!';
            };
            reader.readAsDataURL(photo);
        } else {
            document.getElementById('profile-message').innerText = 'Please fill in all fields and upload a photo.';
        }
    });

    // Schedule Page Functionality
    const scheduleForm = document.getElementById('schedule-form');
    const scheduleList = document.getElementById('schedule-list');

    scheduleForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('schedule-name').value;
        const skill = document.getElementById('schedule-skill').value;
        const skillNeeded = document.getElementById('schedule-skill-needed').value;
        const date = document.getElementById('schedule-date').value;

        if (name && skill && skillNeeded && date) {
            const scheduleCard = document.createElement('div');
            scheduleCard.className = 'schedule-card';
            scheduleCard.innerHTML = `
                <h3>${name}</h3>
                <p>Offering: ${skill}</p>
                <p>Needing: ${skillNeeded}</p>
                <p>Date: ${date}</p>
            `;
            scheduleList.appendChild(scheduleCard);
            scheduleForm.reset();
            document.getElementById('schedule-message').innerText = 'Schedule saved!';
        } else {
            document.getElementById('schedule-message').innerText = 'Please fill in all fields.';
        }
    });

    // Forum Functionality
    const forumForm = document.getElementById('forum-form');
    const forumList = document.getElementById('forum-list');

    forumForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const topic = document.getElementById('forum-topic').value;
        const message = document.getElementById('forum-message').value;

        if (topic && message) {
            const forumThread = document.createElement('div');
            forumThread.className = 'forum-thread';
            forumThread.innerHTML = `
                <h3>${topic}</h3>
                <p>${message}</p>
            `;
            forumList.appendChild(forumThread);
            forumForm.reset();
            document.getElementById('forum-message').innerText = 'Post added!';
        } else {
            document.getElementById('forum-message').innerText = 'Please fill in all fields.';
        }
    });

    // Reviews and Ratings Functionality
    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('review-name').value;
        const skillPartner = document.getElementById('review-skill').value;
        const rating = document.getElementById('review-rating').value;
        const message = document.getElementById('review-message').value;

        if (name && skillPartner && rating && message) {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <h3>${name}</h3>
                <p>Partner: ${skillPartner}</p>
                <p>Rating: ${rating} stars</p>
                <p>${message}</p>
            `;
            reviewList.appendChild(reviewCard);
            reviewForm.reset();
            document.getElementById('review-message').innerText = 'Review submitted!';
        } else {
            document.getElementById('review-message').innerText = 'Please fill in all fields.';
        }
    });
});
