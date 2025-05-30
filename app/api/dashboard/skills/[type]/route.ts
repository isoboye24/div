import { getTotalSkills } from '@/lib/actions/dashboard.actions';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const type = req.nextUrl.pathname.split('/').pop();
  const categoryType = decodeURIComponent(type ?? '');

  try {
    const total = await getTotalSkills({ activeType: categoryType });
    return NextResponse.json({ total });
  } catch (error) {
    console.error('Error fetching skill count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skill count' },
      { status: 500 }
    );
  }
}
