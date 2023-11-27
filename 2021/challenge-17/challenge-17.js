export default function countPackages (carriers, carrierID) {
  const [, packages, subordinateIds] = carriers.find(([id]) => id === carrierID)
  let carriersToCount = [...subordinateIds]
  let totalPackages = packages

  while (carriersToCount.length > 0) {
    const currentCarrierId = carriersToCount.shift()
    const [, packages, subordinateIds] = carriers.find(([id]) => id === currentCarrierId)
    if (subordinateIds.length > 0) carriersToCount = carriersToCount.concat(subordinateIds)
    totalPackages += packages
  }

  return totalPackages
}
