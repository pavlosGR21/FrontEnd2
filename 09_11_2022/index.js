// Id, Title, Description, Price
function Product(Id, Title, Description, Price, SerialNo) {
    this.Id = Id;
    this.Title = Title;
    this.Description = Description;
    this.Price = Price;
    this.SerialNo = SerialNo;
}

function createTableRow(product, tableBodyId) {
    // Step 1. Create a new TR element
    let trElement = document.createElement('tr');

    // Step 2. Generate the contents of the TR element
    let innerHTML = generateTRElementProduct(product);

    // Step 3. Store the contents of the TR to the actual TR Element
    trElement.innerHTML = innerHTML;

    // Step 4. Append to the tbody the new TR
    appendTRToTableBody(trElement, tableBodyId);

}

function generateTRElementProduct(product) {
    let innerHTML = `<tr>`;
    innerHTML += `<td>${product.Id}</td>`;
    innerHTML += `<td>${product.Title}</td>`;
    innerHTML += `<td>${product.Description}</td>`;
    innerHTML += `<td>${product.Title}</td>`;
    innerHTML += `<td><p class="btn btn-warning" onclick="alertSomeText(${product.Id})">Details</p>&nbsp;<p class="btn btn-danger">Delete</p></td>`;
    innerHTML += `</tr>`;
    return innerHTML;
}

function appendTRToTableBody(element, tableBodyId) {
    let tableBody = document.getElementById(tableBodyId);
    tableBody.appendChild(element);
}

// let myPen = new Product(1, "Red Pen", "Awesome Red", 10, 11111);
// createTableRow(myPen, 'listOfProductsBody');

function generateDummyProducts() {
    let products = [];
    products.push(new Product(1, "Red Pen", "Awesome Red", 10, 11111));
    products.push(new Product(2, "Red Pen", "Awesome Red", 10, 11111));
    products.push(new Product(3, "Red Pen", "Awesome Red", 10, 11111));
    products.push(new Product(4, "Red Pen", "Awesome Red", 10, 11111));
    products.push(new Product(5, "Red Pen", "Awesome Red", 10, 11111));
    products.push(new Product(6, "Red Pen", "Awesome Red", 10, 11111));
    products = products;
    return products;
}

function addMultipleProductsToTable(products, tableId)
{
    // Step 1. Find on the table with id tableId the id of the tbody (of the table)
    let table = document.getElementById(tableId);
    let tableBodyId = table.getElementsByTagName("tbody")[0].id;

    // Step 2. for each product in array createTableRow
    for(product of products)
    {
        createTableRow(product, tableBodyId);
    }
    
}

addMultipleProductsToTable(generateDummyProducts(), 'listOfProducts');

function alertSomeText(text)
{
    alert(text);
}