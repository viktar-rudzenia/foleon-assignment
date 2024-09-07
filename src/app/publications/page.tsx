import PublicationsList from '@/components/publications/PublicationsList';

import styles from './page.module.scss';

export default function Publications() {
  return (
    <div data-testid="publications" className={styles.wrapper}>
      <PublicationsList />
    </div>
  );
}
