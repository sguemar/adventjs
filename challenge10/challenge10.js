export default function getCoins (change) {
  const COINS = [1, 2, 5, 10, 20, 50]
  const changeReturn = [0, 0, 0, 0, 0, 0]
  let currentChange = change

  for (let i = changeReturn.length - 1; i >= 0; i--) {
    const numberOfCoins = Math.floor(currentChange / COINS[i])
    changeReturn[i] = numberOfCoins
    currentChange -= numberOfCoins * COINS[i]
    if (currentChange === 0) break
  }
  return changeReturn
}
