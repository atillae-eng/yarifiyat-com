export interface Campaign {
  id: number
  brand_name: string
  logo_url?: string
  discount: number
  category: string
  description: string
  tks_score: number
  affiliate_url: string
  is_active: boolean
  featured: boolean
  created_at: string
  updated_at: string
}
