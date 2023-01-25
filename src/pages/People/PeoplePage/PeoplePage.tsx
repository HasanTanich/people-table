import React, { useEffect, useState, useReducer } from 'react';
import './PeoplePage.scss';

import PeopleTable from './PeopleTable/PeopleTable';
import PeopleFilters from '../PeopleFilters';
import Loader from '../../../components/Loader/Loader';
import { Person } from '../../../types/Person';
import { getPeople } from '../../../api';
import { SortArrows } from '../../../types/SortArrows';

const HeadersSortArrows : SortArrows= {
  name: {
    up: false,
    down: false,
  },
  sex: {
    up: false,
    down: false,
  },
  born: {
    up: false,
    down: false,
  },
  died: {
    up: false,
    down: false,
  },
};
const PeoplePage = () => {

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
      case 'FETCH_PEOPLE':
        return { ...state, loading: true };
      case 'FETCH_PEOPLE_SUCCESS':
        return { ...state, loading: false, peopleData: action.peopleData };
      case 'FETCH_PEOPLE_ERROR':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
      }
    },
    { loading: false, peopleData: [], error: null }
  );

  const [sortType, setSortType] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [headersSortArrows, setHeadersSortArrows] = useState(HeadersSortArrows);

  useEffect(() => {
    dispatch({ type: 'FETCH_PEOPLE' });
    getPeople()
      .then(data =>
        dispatch({ type: 'FETCH_PEOPLE_SUCCESS', peopleData: data })
      )
      .catch(error =>
        dispatch({ type: 'FETCH_PEOPLE_ERROR', error: error.message })
      );
  }, []);

  const getReorderedPeople = (type: string, order: string) : Person[] => {
    const visiblePeople = [...state.peopleData];

    visiblePeople.sort( (a,b) => {
      if(order === 'asc'){
        if (a[type] < b[type]) return -1;
        if (a[type] > b[type]) return 1;
      }else if(order === 'desc'){
        if (a[type] < b[type]) return 1;
        if (a[type] > b[type]) return -1;
      }
    });  
    return visiblePeople;
  };

  const handleTableSort = (type: string, arrow: string) : void => {
    if(sortType === type){
      if(sortOrder === 'asc'){
        setSortOrder('desc');

        headersSortArrows[type][arrow] ? 
          setHeadersSortArrows({...HeadersSortArrows, [type]: {[arrow]: false, [arrow === 'up' ? 'down' : 'up'] : true}}) : 
          setHeadersSortArrows({...HeadersSortArrows, [type]: {[arrow]: true}});
      } else if(sortOrder === 'desc'){
        setSortType('');
        setSortOrder('');

        setHeadersSortArrows(HeadersSortArrows);
      }
    } else {
      setSortType(type);
      setSortOrder('asc');

      headersSortArrows[type][arrow] ? 
        setHeadersSortArrows({...HeadersSortArrows, [type]: {[arrow]: false, [arrow === 'up' ? 'down' : 'up'] : true}}) : 
        setHeadersSortArrows({...HeadersSortArrows, [type]: {[arrow]: true}});    
    }
  };
  
  const visiblePeople : Person[] | undefined = getReorderedPeople(sortType, sortOrder) ;
  const {error, loading, peopleData} = state;
  return (
    <>
      <div className="block">

        <div className="columns">
          
          <div className="column filters">
            {(!error && !loading) && <PeopleFilters />}
          </div>

          <div className="column">
            <div className="box table-container">
              {loading && <Loader />}
          
              {error && <p data-cy="peopleLoadingError">Something went wrong</p>}

              {(!error && !loading && !peopleData) &&
                <p data-cy="noPeopleMessage">
                There are no people on the server
                </p>}

              {/* <p>There are no people matching the current search criteria</p> */}
              {
                (!error && !loading) && 
              <PeopleTable peopleData={visiblePeople} handleTableSort={handleTableSort} headersSortArrows={headersSortArrows}/>}
            </div>
          </div>
        
        </div>   
      </div>
    </>
  );
};

export default PeoplePage;
