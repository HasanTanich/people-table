import React, { useEffect, useState } from 'react';
import { getPeople } from '../../../api';
import './PeoplePage.scss';

import PeopleTable from '../PeopleTable/PeopleTable';
import PeopleFilters from '../PeopleFilters';
import Loader from '../../../components/Loader/Loader';
import { Person } from '../../../types/Person';

const PeoplePage = () => {
  const [peopleData, setPeopleData] = useState<Person[] | null>(null);

  useEffect( () => {
    getPeople().then( d=> setPeopleData(d));
  }, []);
  
  return (
    <div>      
      { !peopleData && <Loader />}
      {
        peopleData && 
        <div className="people-content">
          <PeopleTable peopleData={peopleData}/>
          <PeopleFilters />
        </div>
      }
    </div>
  );
};

export default PeoplePage;
