const postForm = document.getElementById('postForm');
const feed = document.getElementById('feed');

postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    const postImage = document.createElement('img');
    postImage.src = image;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(postImage);

    feed.prepend(postDiv);

    // Clear the form
    postForm.reset();
});
