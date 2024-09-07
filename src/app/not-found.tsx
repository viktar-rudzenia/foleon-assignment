import Link from 'next/link';

import { FoButton } from '@/components/shared';
import { AllRoutesEnum } from '@/utils/constants';

import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>Page not found...</h2>
      <p>We&apos;re unable to find the page you&apos;re looking for</p>
      <FoButton>
        <Link className={styles.link} href={AllRoutesEnum.HOME}>
          Back to Home
        </Link>
      </FoButton>
    </div>
  );
}
