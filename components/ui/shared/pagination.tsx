'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../button';
import { formUrlQuery } from '@/lib/utils';
import { PaginationProps } from '@/types';

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle Page Change
  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || 'page',
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-2 mt-3 justify-center">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick('prev')}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick('next')}
        disabled={Number(page) >= (totalPages ?? 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
