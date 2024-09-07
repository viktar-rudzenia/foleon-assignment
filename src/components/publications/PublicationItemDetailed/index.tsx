import { ReactElement } from 'react';
import { Card } from 'antd';
import Image from 'next/image';

import { ProjectInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function PublicationItemDetailed({
  project,
}: {
  project: ProjectInterface;
}): ReactElement {
  return (
    <Card
      className={styles.projectCard}
      cover={
        <Image
          className={styles.image}
          src={project?.icon || '/project-icon-placeholder.png'}
          alt={project?.name}
          width="300"
          height="400"
        />
      }
    >
      <div>Name: {project.name}</div>
      <div>Identifier: {project.identifier}</div>
      <div>Created: {project.created_on}</div>
      <div>Modified: {project.modified_on}</div>
      <div>Affected: {project.affected_on}</div>
    </Card>
  );
}
