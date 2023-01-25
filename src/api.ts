import { Person } from './types/Person';

const API_URL = 'https://mate-academy.github.io/react_people-table/api/people.json';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getPeople(): Promise<Person[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => response.json())
    // if a person's mother or father were in the array, we are adding them to the mother field and father field of that person, as a person object.
    .then(d => {
      d.map((person) => {
        const mother = d.find(element => element.name === person.motherName);
        const father = d.find(element => element.name === person.fatherName);
        mother && (person.mother = mother);
        father && (person.father = father);
        return person;
      });
      return d;
    });
}
