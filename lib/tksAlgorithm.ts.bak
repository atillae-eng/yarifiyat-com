export interface TKSParams {
  discount: number
  benefit: number
  contribution: number
  trust: number
}

export function calculateTKS(params: TKSParams): number {
  const weights = {
    discount: 0.35,
    benefit: 0.25,
    contribution: 0.25,
    trust: 0.15,
  }

  const score =
    params.discount * weights.discount +
    params.benefit * weights.benefit +
    params.contribution * weights.contribution +
    params.trust * weights.trust

  return Math.round(score * 10) / 10
}
