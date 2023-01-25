import React from 'react';
import { Person } from '../../../../../types/Person';
import PersonName from '../PersonName/PersonName';
import './PersonRow.scss';

const PersonRow = ({person, selectedPerson, onSelectedPerson} : {person: Person, selectedPerson: Person | undefined, onSelectedPerson: (person: Person)=> void}) => {
  const {name, sex, born, died, motherName, fatherName, mother, father} = person;
  
  return (
    <tr
      key={name}
      className={`row ${selectedPerson === person ? 'selected' : ''}`} 
    >
      <td>
        <PersonName person={person} onSelectedPerson={onSelectedPerson}/>
      </td>
      <td>
        {sex}
      </td>
      <td>
        {born}
      </td>
      <td>
        {died}
      </td>
      <td>
        {(mother ? <PersonName person={mother} onSelectedPerson={onSelectedPerson}/> : (motherName ? motherName : '-'))}
      </td>
      <td>
        {(father ? <PersonName person={father} onSelectedPerson={onSelectedPerson}/> : (fatherName ? fatherName : '-'))}
      </td>
    </tr>
  );
};

export default PersonRow;
