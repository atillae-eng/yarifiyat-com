export interface CampaignData {
  discount: number
  benefit: number
  contribution: number
  trust: number
}

export function calculateTKS(data: CampaignData): number {
  const weights = {
    discount: 0.35,
    benefit: 0.25,
    contribution: 0.25,
    trust: 0.15,
  }

  const score =
    data.discount * weights.discount +
    data.benefit * weights.benefit +
    data.contribution * weights.contribution +
    data.trust * weights.trust

  return Math.round(score * 10) / 10
}
