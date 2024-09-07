import { ReactElement } from 'react';
import { Card } from 'antd';

import { ProjectInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function PublicationItemDetailed({
  project,
}: {
  project: ProjectInterface;
}): ReactElement {
  return (
    <Card
      className={styles.characterCard}
      cover={<img className={styles.image} src={project.icon || ''} alt={project.name} />}
    >
      <div>Name: {project.name}</div>
    </Card>
  );
}
