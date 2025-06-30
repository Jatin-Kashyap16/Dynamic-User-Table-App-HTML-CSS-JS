const form = document.getElementById("userForm");
const dataTable = document.querySelector("#dataTable tbody");

let editingRow = null; // Track the row being edited

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (editingRow) {
        // Update the existing row
        editingRow.cells[0].textContent = name;
        editingRow.cells[1].textContent = email;
        editingRow.cells[2].textContent = password;
        editingRow = null; // Reset after updating
    } else {
        // Create a new row
        const row = document.createElement('tr');
        row.innerHTML = `
           <td data-label="Name">${name}</td>
           <td data-label="Email">${email}</td>
           <td data-label="Password">${password}</td>
           <td data-label="Action">
               <button type="button">Delete</button>
               <button type="button">Edit</button>
           </td>`;
        dataTable.appendChild(row);
    }

    form.reset(); // Clear form after submit
});

dataTable.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const row = e.target.closest('tr');

        if (e.target.textContent === 'Delete') {
            if (confirm("Are you sure you want to delete this row?")) {
                row.remove();
            }
        }

        if (e.target.textContent === 'Edit') {
            // Set form values from the row
            document.getElementById('name').value = row.cells[0].textContent;
            document.getElementById('email').value = row.cells[1].textContent;
            document.getElementById('password').value = row.cells[2].textContent;

            // Store this row to update later
            editingRow = row;
        }
    }
});
