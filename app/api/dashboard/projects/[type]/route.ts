import { getTotalProjects } from '@/lib/actions/dashboard.actions';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { type: string } }
) {
  const awaitedParam = await params;
  const categoryType = decodeURIComponent(awaitedParam.type);

  try {
    const total = await getTotalProjects({ activeType: categoryType });
    return NextResponse.json({ total });
  } catch (error) {
    console.error('Error fetching projects count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects count' },
      { status: 500 }
    );
  }
}
