import React, {useState} from 'react';
import { Person } from '../../../../types/Person';
import './PeopleTable.scss';
import PersonRow from './PersonRow/PersonRow';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import { SortArrows } from '../../../../types/SortArrows';

const PeopleTable = (
  {peopleData, handleTableSort, headersSortArrows} 
  : 
  {
    peopleData: Person[] | undefined, 
    handleTableSort : (sortType: string, arrow: string)=> void,
    headersSortArrows: SortArrows
  }
) => {
  
  const [selectedPerson, setSelectedPerson] = useState<Person>();

  const onSelectedPerson = (p: Person) => {
    setSelectedPerson(p);
  };

  return (
    <table className="table">
      <thead>
        <tr className="table__headers">
          <th className="table__header">
            <span className="table__header__box">
          Name
              <a href="#/?sort=name">
                <span className="icon">
                  {!headersSortArrows.name.down && <AiFillCaretUp onClick={() => handleTableSort('name', 'up')}/>}
                  {!headersSortArrows.name.up &&<AiFillCaretDown onClick={() => handleTableSort('name', 'down')}/>}
                </span>
              </a>
            </span>
          </th>
          <th className="table__header table__header__sex">
            <span className="table__header__box">
          Sex
              <a href="#/?sort=sex">
                <span className="icon">
                  {!headersSortArrows.sex.down && <AiFillCaretUp onClick={() => handleTableSort('sex', 'up')}/>}
                  {!headersSortArrows.sex.up &&<AiFillCaretDown onClick={() => handleTableSort('sex', 'down')}/>}
                </span>
              </a>
            </span>
          </th>
          <th className="table__header table__header__born">
            <span className="table__header__box">
          Born
              <a href="#/?sort=born">
                <span className="icon">
                  {!headersSortArrows.born.down && <AiFillCaretUp onClick={() => handleTableSort('born', 'up')}/>}
                  {!headersSortArrows.born.up &&<AiFillCaretDown onClick={() => handleTableSort('born', 'down')}/>}
                </span>
              </a>
            </span>
          </th>
          <th className="table__header table__header__died">
            <span className="table__header__box">
          Died
              <a href="#/?sort=died">
                <span className="icon">
                  {!headersSortArrows.died.down && <AiFillCaretUp onClick={() => handleTableSort('died', 'up')}/>}
                  {!headersSortArrows.died.up &&<AiFillCaretDown onClick={() => handleTableSort('died', 'down')}/>}
                </span>
              </a>
            </span>
          </th>
          <th className="table__header table__header__mother">
          Mother
          </th>
          <th className="table__header table__header__father">
          Father
          </th>
        </tr>
      </thead>
      <tbody className="table__body">
        {
          peopleData?.map( person =>(
            <PersonRow 
              key={person.slug} 
              person={person} 
              selectedPerson={selectedPerson} 
              onSelectedPerson={onSelectedPerson}
            />)
          ) 
        }
      </tbody>
    </table>
  );
};

export default PeopleTable;
