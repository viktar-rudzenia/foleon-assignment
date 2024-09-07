'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { Modal, Pagination, Result, Spin } from 'antd';
import { Button } from 'antd/es/radio';

import { fetcher } from '@/utils/fetcher';
import { ProjectInterface, ProjectsApiResponseInterface } from '@/utils/interfaces';
import { ApiRoutesEnum } from '@/utils/constants';
import { PUBLICATIONS_PAGE_SIZE } from './constants';
import PublicationItem from '../PublicationItem';
import PublicationItemDetailed from '../PublicationItemDetailed';

import styles from './index.module.scss';

export default function PublicationsList() {
  const [publicationsPageIndex, setPublicationsPageIndex] = useState(1);
  const [selectedProject, setSelectedProject] = useState<null | ProjectInterface>(null);

  const {
    data: projectsData,
    isLoading: isProjectsDataLoading,
    error: projectDataError,
    mutate: mutateProjectsData,
  } = useSWR<ProjectsApiResponseInterface>(
    `${ApiRoutesEnum.PUBLICATIONS}?page=${publicationsPageIndex}&limit=${PUBLICATIONS_PAGE_SIZE}`,
    fetcher
  );

  const projects = projectsData?._embedded?.title || [];

  return (
    <div className={styles.wrapper}>
      {isProjectsDataLoading && <Spin size="large" />}
      {!isProjectsDataLoading && projectDataError && (
        <Result
          status="warning"
          title="An error occurred, please try downloading Characters again or refreshing the page"
          extra={
            <>
              <Button type="primary" onClick={() => mutateProjectsData()}>
                Download Projects data again
              </Button>
              <span>or</span>
              <Button type="primary" onClick={() => window.location.reload()}>
                Refresh the page
              </Button>
            </>
          }
        />
      )}

      {projectsData && projects.length > 0 && (
        <>
          <div className={styles.charactersList}>
            {projects?.map((project) => (
              <PublicationItem
                key={project.id}
                project={project}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </div>
          <div className={styles.paginationWrapper}>
            <Pagination
              pageSize={PUBLICATIONS_PAGE_SIZE}
              total={projectsData?.total}
              current={projectsData?.page}
              onChange={(page) => setPublicationsPageIndex(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}

      {selectedProject && (
        <Modal
          open={!!selectedProject}
          footer={null}
          onCancel={() => setSelectedProject(null)}
          centered
        >
          <PublicationItemDetailed project={selectedProject} />
        </Modal>
      )}

      {!isProjectsDataLoading && !projectDataError && projects.length === 0 && (
        <div>Unfortunately, no projects were found.</div>
      )}
    </div>
  );
}
