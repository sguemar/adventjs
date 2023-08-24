export default function canCarry (capacity, trip) {
  let missingDeliveries = []
  let sledGifts = 0

  for (const [giftsToDeliver, pickUpPoint, deliveryPoint] of trip) {
    if (giftsToDeliver > capacity) return false

    sledGifts += giftsToDeliver
    missingDeliveries
      .filter(({ deliveryPoint }) => deliveryPoint <= pickUpPoint)
      .forEach(({ gifts }) => { sledGifts -= gifts })

    if (sledGifts > capacity) return false

    missingDeliveries = missingDeliveries.filter(({ deliveryPoint }) => deliveryPoint > pickUpPoint)
    missingDeliveries.push({ deliveryPoint, gifts: giftsToDeliver })
  }

  return true
}
