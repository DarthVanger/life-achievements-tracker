import React, { createContext, useState } from 'react';
import AchievementsContext from './AchievementsContext';
import guid from './guid';

const initialAchievements = [
  {
    id: guid(),
    name: 'born',
    stars: 1,
  },
  {
    id: guid(),
    name: 'still alive',
    stars: 2,
  }
];

const AchievementsStoreProvider = ({ children }) => {
  const [achievements, setAchievements] = useState(initialAchievements);

  return (
    <AchievementsContext.Provider value={{ achievements, setAchievements }}>
      {children}
    </AchievementsContext.Provider>
  );
};

export default AchievementsStoreProvider;
