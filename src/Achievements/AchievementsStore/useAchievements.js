import React, { useContext } from 'react';
import AchievementsContext from './AchievementsContext';

const useAchievements = () => {
  const contextValue = useContext(AchievementsContext); 

  return contextValue;
};

export default useAchievements;
