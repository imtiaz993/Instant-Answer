export const isTokenExpired = () => {
  const tokenTime = localStorage.getItem("tokenAdded");
  const nowTime = new Date().getTime();
  const difference = Math.abs(nowTime - tokenTime) / (1000 * 60);

  const timeToExpireInMinutes = 120;

  return difference >= timeToExpireInMinutes;
};
