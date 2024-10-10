var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler{

  
  constructor(pets){
     this.pets = pets;
  }

  findPetsInAgeRange = function(minAge, maxAge) {
    
    return this.pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
  }

  listAdoptedPetsByDate = function(){

    var adoptedPets = this.pets.filter(pet => pet.adopted === true);
    return adoptedPets.sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
  }

  ListPets(){
    
    var petlist ;
    if(arguments.length == 0)
    {
      petlist = this.pets;
    }
    else if(arguments.length === 1  ){

      if(Array.isArray(arguments[0])){
        petlist = arguments[0];
      }
      else{
        petlist = Array.from(arguments);
      }
      
    }
    else{
      petlist = Array.from(arguments);
      
    }

    const createPetItem = function(myPet){
      var ret = `${myPet.name} | ${myPet.species} | Age : ${myPet.age}`;

      if(myPet.adopted === true){
        ret += "+ | Adopted!"; 
      }

      return ret;
    }

    
    return petlist.map(createPetItem);

  }

  calculateUniqueAdoptionFee(petNames){

    let petNameArr = Array.from(arguments);
    
    let petArr = this.pets.filter( pet => petNameArr.includes(pet.name) );

    let totalAdoptionFee = petArr.reduce((sum, pet) =>{
      return sum + pet.adoptionFee;
    }, 0)

    return totalAdoptionFee;
  }
  
}



const petHandler = new PetHandler(pets);

Array.prototype.findPetsInAgeRange = function(minAge, maxAge){

  return this.pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
}

Array.prototype.listAdoptedPetsByDate = function(){
  
  var adoptedPets = this.filter(pet => pet.adopted === true);
  
  return adoptedPets.sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
}

Array.prototype.ListPets = function(){
    
  var petlist ;
  
  if(this.length == 0)
  {
    petlist = this;
    
  }
  else if(this.length === 1  ){

    if(Array.isArray(this[0])){
      petlist = this[0];
    }
    else{
      petlist = Array.from(this);
    }
    
  }
  else{
    petlist = Array.from(this);
    
  }

  const createPetItem = function(myPet){
    var ret = `${myPet.name} | ${myPet.species} | Age : ${myPet.age}`;

    if(myPet.adopted === true){
      ret += "+ | Adopted!"; 
    }

    return ret;
  }

  
  return petlist.map(createPetItem);

}

Array.prototype.calculateUniqueAdoptionFee = function(petNames){

  let petNameArr = Array.from(arguments);
  
  let petArr = this.filter( pet => petNameArr.includes(pet.name) );

  let totalAdoptionFee = petArr.reduce((sum, pet) =>{
    return sum + pet.adoptionFee;
  }, 0)

  return totalAdoptionFee;
}


/*
//Testing Part 1 using console.log

console.log( petHandler.findPetsInAgeRange(1,4));

console.log(petHandler.listAdoptedPetsByDate());

console.log(petHandler.ListPets());

console.log(petHandler.ListPets(pets[0], pets[1]));

console.log(petHandler.ListPets(pets));

console.log(petHandler.calculateUniqueAdoptionFee('Milo', 'Coco', 'Milo' ));

//Testing Part 2

console.log(petHandler.findPetsInAgeRange(1,4).listAdoptedPetsByDate());

console.log(petHandler.findPetsInAgeRange(1,4).ListPets());

console.log(petHandler.findPetsInAgeRange(1,4).calculateUniqueAdoptionFee("Polly", "Coco", "Oreo"));

console.log(petHandler.findPetsInAgeRange(1,4).listAdoptedPetsByDate().ListPets());

console.log(petHandler.findPetsInAgeRange(1,4).listAdoptedPetsByDate().calculateUniqueAdoptionFee("Polly", "Coco", "Oreo"));


console.log(petHandler.listAdoptedPetsByDate().calculateUniqueAdoptionFee("Polly", "Coco", "Oreo"));

*/






