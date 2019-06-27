class ButtonLink {
    constructor(buttonElement) {

      this.buttonElement = buttonElement;

      console.log('this.buttonElement', this.buttonElement);
  
      this.buttonData = this.buttonElement.dataset.job;
  
      if (this.buttonData === 'all') {
        this.people = document.querySelectorAll('.people');
  
      } else {
        this.people = document.querySelectorAll(`.people[data-job="${this.jobData}"]`);
  
      }
      
    
      this.people = Array.from(this.people).map(person => new Picture(person));
      
      this.buttonElement.addEventListener('click', () => {
        this.selectPeople();
      });
    }
  
    selectPeople() {
  
      const buttons = document.querySelectorAll('.button');
  
      buttons.forEach( button => {
        button.classList.remove('active-tab');
      })

      const people = document.querySelectorAll('.people');
      people.forEach( person => {
        person.style.display = 'none';
      })
      
  
      this.buttonElement.classList.add('active-tab');
  
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
