export const isRefreshTokenExpired = () => {
  const tokenTime = localStorage.getItem("refreshAdded");
  const nowTime = new Date().getTime();
  const difference = Math.abs(nowTime - tokenTime) / (1000 * 60 * 60);

  const timeToExpireInHours = 48;

  return difference >= timeToExpireInHours;
};
