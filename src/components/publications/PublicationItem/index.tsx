import { ReactElement } from 'react';
import { Card } from 'antd';

import { ProjectInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function PublicationItem({
  project,
  setSelectedProject,
}: {
  project: ProjectInterface;
  setSelectedProject: (project: ProjectInterface) => void;
}): ReactElement {
  return (
    <Card
      className={styles.projectCard}
      hoverable
      cover={<img className={styles.image} src={project.icon || ''} alt={project.name} />}
      onClick={() => setSelectedProject(project)}
    >
      {project.name}
    </Card>
  );
}
