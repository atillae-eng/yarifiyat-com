import { NextResponse } from 'next/server'
import { calculateTKS } from '@/lib/tksAlgorithm'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { discount, benefit, contribution, trust } = body

    if (discount === undefined || benefit === undefined) {
      return NextResponse.json(
        { error: 'Ýndirim ve Fayda alanlarý zorunludur.' },
        { status: 400 }
      )
    }

    const score = calculateTKS({ discount, benefit, contribution, trust })

    return NextResponse.json({
      tks_score: score,
      ...body,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Sunucu hatasý oluþtu.' },
      { status: 500 }
    )
  }
}
