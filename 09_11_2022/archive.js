function createTableRow(id, title, description, price, tableBodyId) {
    let innerHTML =
        `<tr>
            <td>${id}</td>
            <td>${title}</td>
            <td>${description}</td>
            <td>${price}</td>
            <td>
                <p class="btn btn-warning">Details</p>
                <p class="btn btn-danger">Delete</p>
            </td>
        </tr>`;
    let tableBody = document.getElementById(tableBodyId);
    let trElement = document.createElement('tr');
    trElement.innerHTML = innerHTML;
    tableBody.appendChild(trElement);
}

// createTableRow(1,"sdfsdf", "asasdasd", 100, 'listOfProductsBody');


function createTableRow2(product, tableBodyId)
{
    let innerHTML = `<tr>`;
    for(cell of product)
    {
        innerHTML += `<td>${cell}</td>`;
    }
    innerHTML += `<td><p class="btn btn-warning">Details</p>&nbsp;<p class="btn btn-danger">Delete</p></td>`;
    innerHTML += `</tr>`;
    let tableBody = document.getElementById(tableBodyId);
    let trElement = document.createElement('tr');
    trElement.innerHTML = innerHTML;
    tableBody.appendChild(trElement);
}

// createTableRow2([1, "Mic", "Super Mic", 1000], 'listOfProductsBody');