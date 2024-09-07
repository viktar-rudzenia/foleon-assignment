import Link from 'next/link';

import { FoButton } from '@/components/shared';
import { AllRoutesEnum } from '@/utils/constants';

import styles from './page.module.scss';

export default function Home() {
  return (
    <h1 className={styles.wrapper}>
      <div>This is the home page of the Foleon Assignment app.</div>
      <FoButton>
        <Link className={styles.link} href={AllRoutesEnum.PUBLICATIONS}>
          Go to publications page
        </Link>
      </FoButton>
    </h1>
  );
}
