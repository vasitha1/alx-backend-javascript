interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Vasitha",
  lastName: "Yong",
  age: 27,
  location: "Cameroon"
}

const studentTwo: Student = {
  firstName: "Love",
  lastName: "Me",
  age: 57,
  location: "Cameroon"
}

let studentsList: Student [] = [studentOne, studentTwo]

function renderTable(students: Student[]) {
  const table = document.createElement('table')
  // Add table headers (optional but recommended for clarity)  
  const headerRow = document.createElement('tr');  
  const headerFirstName = document.createElement('th');  
  headerFirstName.innerText = 'First Name';  
  const headerLocation = document.createElement('th');  
  headerLocation.innerText = 'Location';  
  
  headerRow.appendChild(headerFirstName);  
  headerRow.appendChild(headerLocation);  
  table.appendChild(headerRow);  

  // Iterate over the students array and create table rows  
  students.forEach(student => {  
      const row = document.createElement('tr');  
      const firstNameCell = document.createElement('td');  
      firstNameCell.innerText = student.firstName;  
      const locationCell = document.createElement('td');  
      locationCell.innerText = student.location;  

      row.appendChild(firstNameCell);  
      row.appendChild(locationCell);  
      table.appendChild(row);  
  });  

  // Append the table to the document body  
  document.body.appendChild(table);  

}
