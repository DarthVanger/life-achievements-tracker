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
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [errorSaving, setErrorSaving] = useState(false);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      (async () => {
        try {
          await persistentStorage.saveAchievements(achievements);
          console.log('Achievements saved to persistent storage')
        } catch (e) {
          console.log('Failed to save achievements to persistent storage')
          setErrorSaving(true);
        }
      })();
    }
  }, [achievements]);

  useEffect(() => {
    (async () => {
      try {
        const persistedAchievements = await persistentStorage.getAchievements();
        console.log('Loaded achievements from persistent storage: ', persistedAchievements)

        setIsLoaded(true);

        if (persistedAchievements === null) {
          console.log('Saving initial achivements list');
          setAchievements(initialAchievements);
        } else {
          setAchievements(persistedAchievements);
        }
      } catch (e) {
        console.log('Failed to load achievements from persistent storage')
        setErrorLoading(true);
      }
    })();
  }, []);

  const store = {
    achievements,
    setAchievements,
    isLoaded,
    errorLoading,
    errorSaving,
  };

  return (
    <AchievementsContext.Provider value={store}>
      {children}
    </AchievementsContext.Provider>
  );
};

export default AchievementsStoreProvider;
