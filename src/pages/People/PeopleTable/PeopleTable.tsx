import React from 'react';
import { Person } from '../../../types/Person';
import './PeopleTable.scss';

const PeopleTable = ({peopleData} : {peopleData: Person[]}) => {
  return (
    <div className="table-box">
      <table className="table">
        <thead>
          <tr className="table__headers">
            <th className="table__header table__header__name">
          Name
            </th>
            <th className="table__header table__header__sex">
          Sex
            </th>
            <th className="table__header table__header__born">
          Born
            </th>
            <th className="table__header table__header__died">
          Died
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
            peopleData.map( person => {
              const {name, sex, born, died, motherName, fatherName} = person;
            
              return (
                <tr
                  key={name}
                  className="table__body__row" 
                >
                  <td className="table__body__item">
                    {name}
                  </td>
                  <td className="table__body__item">
                    {sex}
                  </td>
                  <td className="table__body__item">
                    {born}
                  </td>
                  <td className="table__body__item">
                    {died}
                  </td>
                  <td className="table__body__item">
                    {motherName}
                  </td>
                  <td className="table__body__item">
                    {fatherName}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default PeopleTable;
