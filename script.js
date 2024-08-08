//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        const table = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        table.appendChild(row);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

        // Add event listener to delete button
        row.querySelector('.delete').addEventListener('click', function() {
            row.remove();
        });
    } else {
        alert('Please fill out all fields');
    }
});
