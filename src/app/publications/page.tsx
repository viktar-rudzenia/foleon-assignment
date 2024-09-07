import PublicationsList from '@/components/publications/PublicationsList';

import styles from './page.module.scss';

export default function Publications() {
  return (
    <div className={styles.wrapper}>
      <PublicationsList />
    </div>
  );
}
