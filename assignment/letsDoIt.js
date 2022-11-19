let candidates = []


function Candidate(CandidateNumber, FirstName, MiddleName, LastName, Gender, Languange, Birthdate, PhotoId, PhotoIdDate, Email, Address, Address2, Country, State, City, Postal, Mobile, Landline)
{
this.CandidateNumber = CandidateNumber
this.FirstName = FirstName
this.MiddleName = MiddleName
this.LastName = LastName
this.Gender = Gender
this.Languange = Languange
this.Birthdate = Birthdate
this.PhotoId = PhotoId
this.PhotoIdDate = PhotoIdDate
this.Email = Email
this.Address = Address
this.Address2 = Address2
this.Country = Country
this.State = State
this.City = City
this.Postal = Postal
this.Mobile = Mobile
this.Landline = Landline
}
function generateTRElementCandidate(candidate, index) 
{
    let innerHTML = `<tr>`;
    
    innerHTML += `<td>${candidate.CandidateNumber}</td>`;
    innerHTML += `<td>${candidate.FirstName}</td>`;
    innerHTML += `<td>${candidate.LastName}</td>`;
    innerHTML += `<td><p class="btn btn-warning" onclick="alertProduct(${index})">Details</p>&nbsp;<p class="btn btn-dark" onclick="deleteProduct(event, ${index})">Delete</p></td>`;
    innerHTML += `</tr>`;
    return innerHTML;
}

function appendTRToTableBody(element, tableBodyId) 
{
    let tableBody = document.getElementById(tableBodyId);
    tableBody.appendChild(element);
}

function generateDummyCandidates() 
{
    let candidates = [];
    candidates.push(new Candidate( "14589", "Paul",null,  "Xanthhopoulos"));
    candidates.push(new Candidate( "05689 ", "Peter",null, "Stefanopoulos"));
    candidates.push(new Candidate( "07892 ", "Jason",null, "Marinou"));
    candidates.push(new Candidate( "02389 ", "John",null, "Stefanakis"));
    candidates.push(new Candidate( "14802 ", "George",null, "Haitoglou"));
   
    return candidates;
}

function alertCandidate(index)
{
    let candidate = candidates[index];
    let text = `Candidate.CandidateId: ${candidate.CandidateId}\n Candidate.FirstName: ${candidate.FirstName}`;
    alert(text);
}

function deleteCandidates(event, index)
{
    // deleteAllRows || deleteSpecificRow
    let tableBody = event.srcElement.parentElement.parentElement.parentElement;
    candidates.splice(index,1); // splice(index,0) or splice(index,1)
    tableBody.innerHTML = '';
    createHeadingRow(tableBody.id);
    addMultipleCandidatesToTable(candidates, 'ListOfCandidates');
}

function addMultipleCandidatesToTable(candidates, tableId)
{
    // Step 1. Find on the table with id tableId the id of the tbody (of the table)
    let table = document.getElementById(tableId);
    let tableBodyId = table.getElementsByTagName("tbody")[0].id;

    // Step 2. for each product in array createTableRow
    let index = 0;
    for(candidate of candidates) // for(i = 0; i < products.length; i++)
    {
        createTableRow(candidate, index, tableBodyId);
        index++;
    }
    
}

function createTableRow(candidate, index, tableBodyId) 
{
    // Step 1. Create a new TR element
    let trElement = document.createElement('tr');

    // Step 2. Generate the contents of the TR element
    let innerHTML = generateTRElementCandidate(candidate, index);

    // Step 3. Store the contents of the TR to the actual TR Element
    trElement.innerHTML = innerHTML;

    // Step 4. Append to the tbody the new TR
    appendTRToTableBody(trElement, tableBodyId);

}

function createHeadingRow(tableBodyId)
{
    let headingRow = `<tr>
    <th scope="col">Index</th>
    <th scope="col">Candidate Number</th>
    <th scope="col">Name</th>
    <th scope="col">Last name</th>
    </tr>`;
    let trElement = document.createElement('tr');
    trElement.innerHTML = headingRow;
    appendTRToTableBody(trElement, tableBodyId);
}

function addCandidate(event)
{
    event.preventDefault();
    // let product_id = document.getElementById('product_id').value;
    
    let formInputs = document.getElementsByTagName('input');
    if(validateForm(formInputs)) { // true
        let candidate = new Candidate(formInputs[0].value,
            formInputs[1].value,
            formInputs[2].value,
            formInputs[3].value,
            formInputs[4].value,
            formInputs[5].value);
        candidates.push(candidate);
        let index = candidates.length - 1;
        createTableRow(candidate, index, 'ListOfCandidatesBody');
        // reset form          
        document.getElementById('addCandidateForm').reset();    
    } else { // false
        console.log("Warning");
    }
}

function validateForm(inputs)
{   
    if(inputs[0].value >= 1 && inputs[1].value.length != 0) { 
        return true;
    }
    return false;
}

function searchCandidateById(Id) {
    for(i = 0; i <= candidates.length - 1; i++)
    {
        if(candidates[i].Id == Id)
        {
            return number;
        }
    }
    return -1;
}

function main()
{
    candidates = generateDummyCandidates();
    addMultipleCandidatesToTable(candidates, 'ListOfCandidates');
    $(document).ready(function() {
        $("#addCandidateFormDiv").hide();
        $("#formAddButton").click(function() {
            $("#addCandidateFormDiv").toggle();
        });
    });

   
   

}
main();