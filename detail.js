// Récupérer l'ID de l'article à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// URL de l'API pour récupérer les détails de l'article
const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

// Sélectionner les éléments HTML pour afficher les détails de l'article
const postTitleElement = document.querySelector('#post-title');
const postBodyElement = document.querySelector('#post-body');

// Requête pour récupérer les détails de l'article
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const post = data;
    postTitleElement.textContent = post.title;
    postBodyElement.textContent = post.body;
  })
  .catch((error) => {
    console.error('Error fetching post:', error);
  });
