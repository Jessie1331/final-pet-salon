let petSalon = {
    name: "Paws & Claws",
    address: {
      street: "6273 Las Vegas Blvd",
      city: "Las Vegas",
      state: "NV",
      zip: "89032",
    },
    hours: {
      open: "9:00 am wed-sun",
      close: "5:00 pm",
    },
    pets: []
  }
  
  let petID=0;
  // object constructor
  //------------Parameters--------------
  function Pet(d,n,a,g,b,s,t,o,p){
    //attr or properties
    this.date = d;
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.type = t;
    this.owner = o;
    this.phone = p;
    this.id=petID++;
  }
  
  //get the values from the inputs
  let inputDate = document.getElementById("txtDate");
  let inputName = document.getElementById("txtName");
  let inputAge = document.getElementById("txtAge");
  let inputGender = document.getElementById("txtGender");
  let inputBreed = document.getElementById("txtBreed");
  let inputService = document.getElementById("txtService");
  let inputType = document.getElementById("txtType");
  let inputOwner = document.getElementById("txtOwner");
  let inputPhone = document.getElementById("txtPhone");
  
  //what about if an input is empty?
  function isValid(aPet){
    let valid = true;//we start assuming that the inputs are valid
    if(aPet.date ===""){
      valid = false;
      alert("Please enter Date");
    }
    if(aPet.name === ""){
      valid = false;
      alert("Please enter Pet Name");
    }
    if(aPet.age === ""){
      valid = false;
      alert("Please enter Age of Pet");
    }
    if(aPet.gender === ""){
      valid = false;
      alert("Please enter Gender");
    }
    if(aPet.breed === ""){
      valid = false;
      alert("Please enter Breed");
    }
    if(aPet.service === ""){
      valid = false;
      alert("Please select Service");
    }
    if(aPet.type === ""){
      valid = false;
      alert("Please enter Type of pet");
    }
    if(aPet.owner === ""){
      valid = false;
      alert("Please enter Owner name");
    }
    if(aPet.phone === ""){
      valid = false;
      alert("Please enter Phone Number")
    }
    //otherwise
    return valid;
  }
  
  // register function
  function register() {
    console.log("register");
    //create the newPet
    let newPet = new Pet(inputDate.value,inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhone.value);
    //validation
    if(isValid(newPet)===true){
    //push the newPet obj into the array
    petSalon.pets.push(newPet);
    //display on the console the pets into the array
    console.log(petSalon.pets);
    displayTable();
    updateInfo();
    // displayPetCards();
    //clear the form
    clearForm();
    } 
  }
  
  function updateInfo() {
    document.getElementById("numberOfPets").innerHTML = petSalon.pets.length;
  }
  
  function deletePet(theId) {
    console.log("Deleting the selected pet", theId);
    let petIndex;
    //travel the array
    for(let i=0; i<petSalon.pets.length; i++){
      let pet = petSalon.pets[i];
      //find the pet's id
      if(pet.id === theId){ 
        petIndex=i;
      }
    }
    petSalon.pets.splice(petIndex,1);
    //remove it from the array
    document.getElementById(theId).remove();
    updateInfo();
  }
  
  function clearForm() {
    inputDate.value = "";
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputType.value = "";
    inputOwner.value = "";
    inputPhone.value = "";
  }
  
  function init() {
    console.log("init");
    let pet1 = new Pet("09/14/2023","Scooby", 4, "Male","Dane", "Grooming", "Dog", "Jim", "555-555-5555");
    let pet2 = new Pet("09/14/2023","Bubby",3, "Male", "Poddle", "Nail Cut", "Dog", "Jessie", "158-485-9584");
    let pet3 = new Pet("09/15/2023","Fraya", 8, "Female", "tabby","Grooming", "Cat", "Dylan", "123-456-7890");
    petSalon.pets.push(pet1,pet2, pet3);//push the pets into the array
    // displayPetCards();
    displayTable();
    updateInfo();
  }
  
  window.onload = init;

  
function displayTable(){
    //create the tr
    const TABLE = document.getElementById("tblbody");
    let tr = "";
    //travel the array
    for (let i = 0; i < petSalon.pets.length; i++){
      let pet = petSalon.pets[i];
      //create the tr
      tr+= `
        <tr id="${pet.id}">
          <td>${pet.date}</td>
          <td>${pet.name}</td>
          <td>${pet.age}</td>
          <td>${pet.gender}</td>
          <td>${pet.breed}</td>
          <td>${pet.service}</td>
          <td>${pet.type}</td>
          <td>${pet.owner}</td>
          <td>${pet.phone}</td>
          <td><button onclick="deletePet(${pet.id});"><i class="fa-solid fa-trash"></i></button></button></td>
        </tr>
      `;
    }
    TABLE.innerHTML=tr;
  }
  
  //replace under the register the displayCards() by displayTable()