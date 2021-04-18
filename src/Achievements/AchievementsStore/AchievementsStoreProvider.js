import React, { createContext, useState, useEffect } from 'react';
import AchievementsContext from './AchievementsContext';
import guid from './guid';
import * as persistentStorage from './phoneStorage';

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
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    (async () => {
      const persistedAchievements = await persistentStorage.getAchievements();

      if (persistedAchievements === null) {
        persistentStorage.saveAchievements(initialAchievements);
        setAchievements(initialAchievements);
      } else {
        setAchievements(persistedAchievements);
      }
    })();
  }, []);

  return (
    <AchievementsContext.Provider value={{ achievements, setAchievements }}>
      {children}
    </AchievementsContext.Provider>
  );
};

export default AchievementsStoreProvider;
