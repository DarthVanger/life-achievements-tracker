import React, { useContext } from 'react';
import AchievementsContext from './AchievementsContext';

const useAchievements = () => {
  const { achievements, setAchievements } = useContext(AchievementsContext); 

  return { achievements, setAchievements };
};

export default useAchievements;
