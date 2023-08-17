export default function shouldBuyFidelity (times) {
  const REGULAR_TICKET_PRICE = 12
  const FIDELITY_CARD_COST = 250
  const FIDELITY_CARD_DISCOUNT = 0.75

  const costWithRegularTickets = times * REGULAR_TICKET_PRICE
  let costWithFidelityCard = FIDELITY_CARD_COST

  for (let time = 1; time <= times; time++) {
    costWithFidelityCard += REGULAR_TICKET_PRICE * Math.pow(FIDELITY_CARD_DISCOUNT, time)
  }

  return costWithFidelityCard < costWithRegularTickets
}
