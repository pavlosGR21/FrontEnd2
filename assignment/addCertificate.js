let candidates = []


function Candidate(CandidateNumber, FirstName, MiddleName, LastName, Gender, Languange, Birthdate, PhotoId, PhotoIdNbr , PhotoIdDate, Email, Address, Address2, Country, State, City, Postal, Mobile, Landline)
{
this.CandidateNumber = CandidateNumber
this.FirstName = FirstName
this.MiddleName = MiddleName
this.LastName = LastName
this.Gender = Gender
this.Languange = Languange
this.Birthdate = Birthdate
this.PhotoId = PhotoId
this.PhotoIdNbr = PhotoIdNbr

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
    innerHTML +=`<td>${index+1}</td>`
    innerHTML += `<td>${candidate.CandidateNumber}</td>`;
    innerHTML += `<td>${candidate.FirstName}</td>`;
    innerHTML += `<td>${candidate.LastName}</td>`;
    innerHTML += `<td><p class="btn btn-warning" onclick="detailsOfCandidates(${index})">Edit</p>&nbsp;<p class="btn btn-danger" onclick="deleteCandidates(event, ${index})">Delete</p></td>`;
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
    candidates.push(new Candidate( "14589", "Paul", null, "Xanthhopoulos", "1", "Greek", "1988-08-13", "1","AI14585", "2011-05-11", "pavlos.xanthopoulos@hotmail.com","olimpou","29", "Greece", "Athens", "Ilioupoli", "16345", "6908446301", "210585458" ));
    candidates.push(new Candidate( "01258", "Maria","Melina",  "Karra", "2", "Greek", "1989-07-03", "2","IV48565", "2007-05-03", "maria.k@gmail.com","olimpou","29", "Greece", "Athens", "Ilioupoli", "16345", "6908446301", "210585458" ));
    candidates.push(new Candidate( "19856", "Jason","Peter",  "Stefanopoulos", "3", "Greek", "2005-01-15", "1","IO48568", "2016-11-05", "jason.p@hotmail.com","kanari","35", "Greece", "Athens", "agios dimitrios", "17343", "698524125", "2109830648" ));
   
   
    return candidates;
}






function detailsOfCandidates(index){
    let photoIdInp=document.getElementById("photo_idType")
    let genderInp=document.getElementById("gender")
    let candidate = candidates[index];
    let formInputs = document.getElementsByTagName("input");
    formInputs[0].value = candidate.CandidateNumber;
    formInputs[1].value = candidate.FirstName;
    formInputs[2].value = candidate.MiddleName;
    formInputs[3].value = candidate.LastName;
   // formInputs[4].value = candidate.Gender;
    let dropGender = genderInp
    let counter = dropGender.length
    for(let i = 0; i < counter; i++)
    {
        if (dropGender.options[i].value == candidate.Gender)
        {
            dropGender.options[i].selected = true;
        }
    }
    formInputs[4].value = candidate.Languange;
    formInputs[5].value = candidate.Birthdate;
    //formInputs[6].value = candidate.PhotoId;
    let dropPhotoId = photoIdInp
    let photoCounter = dropPhotoId.length
    for(let i = 0; i < photoCounter; i++)
    {
    
        if (dropPhotoId.options[i].value == candidate.PhotoId)
        {
           
            dropPhotoId.options[i].selected = true;
        }
    }
    formInputs[6].value = candidate.PhotoIdNbr;
    formInputs[7].value = candidate.PhotoIdDate;
    formInputs[8].value = candidate.Email;
    formInputs[9].value = candidate.Address;
    formInputs[10].value = candidate.Address2;
    formInputs[11].value = candidate.Country;
    formInputs[12].value = candidate.State;
    formInputs[13].value = candidate.City;
    formInputs[14].value = candidate.Postal;
    formInputs[15].value = candidate.Mobile;
    formInputs[16].value = candidate.Landline;

    formInputs[17].value = index;
}



function alertCandidate(index)
{
    let candidate = candidates[index];
    let text = `Candidate.CandidateNumber: ${candidate.CandidateNumber}\n Candidate.FirstName: ${candidate.FirstName}\n Candidate.LastName: ${candidate.LastName}`;
    alert(text);
}

function deleteCandidates(event, index)
{
   
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
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">options</th>
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
  
        let candidate = new Candidate(formInputs[0].value,
            formInputs[1].value,
            formInputs[2].value,
            formInputs[3].value,
            formInputs[4].value,
            formInputs[6].value,
            formInputs[7].value,
            formInputs[8].value,
            formInputs[9].value,
            formInputs[10].value,
            formInputs[11].value,
            formInputs[12].value,
            formInputs[13].value,
            formInputs[14].value,
            formInputs[15].value,
            formInputs[16].value,
            formInputs[17].value );
        candidates.push(candidate);
        let index = candidates.length - 1;
        createTableRow(candidate, index, 'ListOfCandidatesBody');

        if(formInputs[17].value==""){
            candidates.push (candidate);
            let lastPosition=candidates.length - 1;
            createTableRow(candidate,lastPosition,"ListOfCandidatesBody");
        }
         else {
            candidates[formInputs[17].value]=candidate
            let tableBody = document.getElementById("ListOfCandidatesBody")
            tableBody.innerHTML = ""
            addMultipleCandidatesToTable(candidates,"ListOfCandidates")
        }
        // reset form          
        document.getElementById('addCandidateForm').reset();    
   
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
            $("#addCandidateFormDiv").toggle(500);
        });
    });

    
   

}
main();