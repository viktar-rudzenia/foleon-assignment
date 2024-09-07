'use client';

import useSWR from 'swr';

import { fetcher } from '@/utils/fetcher';

import styles from './page.module.scss';

export default function Publications() {
  const { data } = useSWR('https://api.foleon.com/v2/magazine/title', fetcher);
  console.log('data: ', data);

  return (
    <div className={styles.wrapper}>
      This is the Publications page of the Foleon Assignment app.
    </div>
  );
}
