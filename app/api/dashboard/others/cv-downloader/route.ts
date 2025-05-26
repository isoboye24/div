import { getTotalCVDownloader } from '@/lib/actions/dashboard.actions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const total = await getTotalCVDownloader();
    return NextResponse.json({ total });
  } catch (error) {
    console.error('Error fetching skill count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skill count' },
      { status: 500 }
    );
  }
}
