import { ReactElement } from 'react';
import Image from 'next/image';
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
      cover={
        <Image
          className={styles.image}
          src={project?.icon || '/project-icon-placeholder.png'}
          alt={project?.name}
          width="200"
          height="300"
        />
      }
      onClick={() => setSelectedProject(project)}
      data-testid="project-card"
    >
      Project Name: {project.name}
    </Card>
  );
}
