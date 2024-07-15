export const createAgeCalculator = (birthDate: Date, targetDate: Date):number => {
  const age = targetDate.getFullYear() - birthDate.getFullYear();
  const hadBirthday = (targetDate.getMonth() > birthDate.getMonth()) || 
    ((targetDate.getMonth() === birthDate.getMonth()) && ( targetDate.getDate() === birthDate.getDate()));
  
  return (hadBirthday) ? age : age-1;
};
