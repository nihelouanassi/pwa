const API_URL = 'https://jsonplaceholder.typicode.com/posts';

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    let tableHTML = `
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Corps</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
    `;

    data.forEach((post) => {
      tableHTML += `
        <tr>
          <td>${post.title}</td>
          <td>${post.body}</td>
          <td><a href="detail.html?id=${post.id}" class="btn btn-primary">Visiter</a></td>
        </tr>
      `;
    });

    tableHTML += `
        </tbody>
      </table>
    `;

    document.querySelector('#posts').innerHTML = tableHTML;
    localStorage.setItem('posts', JSON.stringify(data));
  });
