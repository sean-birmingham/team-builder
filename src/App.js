import React, { useState } from 'react';
import { teamData } from './teamData.js';
import Member from './components/Member';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState(teamData);

  return (
    <div className='App'>
      <h1>Team Builder</h1>
      <Member members={teamMembers} />
    </div>
  );
}

export default App;
