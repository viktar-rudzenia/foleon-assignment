'use client'; // Error components must be Client Components
import { useEffect } from 'react';
import Link from 'next/link';

import { FoButton } from '@/components/shared';
import { AllRoutesEnum } from '@/utils/constants';

import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <h2>Something went wrong!</h2>
      <FoButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </FoButton>
      or
      <FoButton>
        <Link className={styles.link} href={AllRoutesEnum.HOME}>
          Back to Home
        </Link>
      </FoButton>
      or
      <FoButton onClick={() => window.location.reload()}>Refresh the page</FoButton>
    </div>
  );
}
