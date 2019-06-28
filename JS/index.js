console.log('hello');
class ButtonLink {
    constructor(buttonElement) {

      this.buttonElement = buttonElement;

  
      this.buttonData = this.buttonElement.dataset.job;



    
      if (this.buttonData === 'all') {
        this.people = document.querySelectorAll('.people');

      } else {
        this.people = document.querySelectorAll(`.people[data-job="${this.buttonData}"]`);
        console.log(this.people, 'this.people');
      }
      
    
      this.people = Array.from(this.people).map(person => {
          return new Person(person)});
      
      this.buttonElement.addEventListener('click', () => {
        this.selectPeople();
      });
    }
  
    selectPeople() {
  
      const buttons = document.querySelectorAll('.job-button');
  
      buttons.forEach( button => {
        button.classList.remove('active-element');
      })

      const people = document.querySelectorAll('.people');
      people.forEach( person => {
        person.style.display = 'none';
      })
      
  
      this.buttonElement.classList.add('active-element');
  
      this.people.forEach(person => person.selectPerson());
    }
  }
  
  class Person {
    constructor(personElement){
      this.personElement = personElement;
    }
    selectPerson(){
      this.personElement.style.display = 'flex';
    }
  
  }
  
let buttons = document.querySelectorAll('.job-button').forEach(button => new ButtonLink(button));

let dropdown = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', function() {
  let content = document.querySelector('.dropdown-content');
  content.classList.toggle('display-dropdown');
  console.log("you clicked");
})