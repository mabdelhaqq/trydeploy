import React from 'react';
import Person from './Person';
import './People.scss';

const peopleData = [
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=p',
    name: 'Alex Guerrero',
    online: true,
    lastActive: ''
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=q',
    name: 'Sara Mendoza',
    online: false,
    lastActive: '15min'
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=w',
    name: 'Ronald Roocets',
    online: true,
    lastActive: ''
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=e',
    name: 'Nancy Lee',
    online: true,
    lastActive: ''
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=r',
    name: 'Maria Jackson',
    online: false,
    lastActive: '10min'
  }
];

const People = () => {
  return (
    <div className="people-container">
      {peopleData.map((person, index) => (
        <Person
          key={index}
          url={person.url}
          name={person.name}
          online={person.online}
          lastActive={person.lastActive}
        />
      ))}
    </div>
  );
};

export default People;
