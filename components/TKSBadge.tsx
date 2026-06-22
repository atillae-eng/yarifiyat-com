interface TKSBadgeProps {
  score: number
}

export default function TKSBadge({ score }: TKSBadgeProps) {
  let color = 'bg-gray-100 text-gray-700'
  if (score >= 80) color = 'bg-green-100 text-green-700'
  else if (score >= 60) color = 'bg-yellow-100 text-yellow-700'

  return (
    <span className={\inline-block px-3 py-1 rounded-full text-xs font-bold \\}>
      TKS {score}
    </span>
  )
}
