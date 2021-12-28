// easy programming exercise for myself
// just rehearsing a bit

// get the form

const form = document.querySelector('#genderAgeForm');

// make variables for all data entiries to collect
let totalMale = 0;
let totalFemale = 0;
let totalOthers = 0;
let totalNumber = 0;
let averageAgeMale = 0;
let averageAgeFemale = 0;
let averageAgeOthers = 0;
let averageAgeTotal = 0;

let genderChoice = '';
let yourAge = 0;

form.addEventListener('submit', (e) => {
  // stop form submission
  e.preventDefault();
  ValidateForm();
  form.reset();

  console.log(`Your Gender is ${genderChoice} Your age is ${yourAge}
    Total: ${totalNumber}
    Total nr men: ${totalMale}
    Total nr women: ${totalFemale}
    Total nr other: ${totalOthers}
    Average age: ${Math.round(averageAgeTotal / totalNumber)}
    Average age men: ${averageAgeMale / totalMale}
    Average age female:${averageAgeFemale / totalFemale}
    Average age others:${averageAgeOthers / totalOthers}
    `);
});

// get form radio values
function ValidateForm() {
  const gender = document.getElementsByName('gender');
  let age = document.getElementById('age').valueAsNumber;
  yourAge = age;

  // add to average age
  averageAgeTotal += age;

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked == true) {
      genderChoice = gender[i].value;
      totalNumber++;

      if (genderChoice == 'Male') {
        totalMale++;
        averageAgeMale += age;
      } else if (genderChoice == 'Female') {
        totalFemale++;
        averageAgeFemale += age;
      } else {
        totalOthers++;
        averageAgeOthers += age;
      }
    }
  }
}
