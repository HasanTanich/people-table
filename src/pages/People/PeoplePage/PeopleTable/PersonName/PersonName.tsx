import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../../../../types/Person';
import './PersonName.scss';

const PersonName = ({person, onSelectedPerson} : {person: Person, onSelectedPerson : (person: Person) => void}) => {
  const {slug, name, sex} = person;
  return (
    <Link 
      to={slug} 
      className={`name ${sex === 'm' ? 'male' : 'female'} `}
      onClick={() => onSelectedPerson(person)}
    >
      {name}
    </Link>
  );
};

export default PersonName;
