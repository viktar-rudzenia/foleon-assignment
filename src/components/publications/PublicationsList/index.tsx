'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { Modal, Pagination, Result, Spin } from 'antd';
import { Button } from 'antd/es/radio';
import qs from 'qs';

import { fetcher } from '@/utils/fetcher';
import { ProjectInterface, ProjectsApiResponseInterface } from '@/utils/interfaces';
import { ApiRoutesEnum } from '@/utils/constants';
import {
  PUBLICATIONS_INITIAL_PAGE_INDEX,
  PUBLICATIONS_PAGE_SIZE,
  compileQueryParams,
} from './constants';
import PublicationItem from '../PublicationItem';
import PublicationItemDetailed from '../PublicationItemDetailed';
import PublicationsActionPanel from '../PublicationsActionPanel';

import styles from './index.module.scss';

export default function PublicationsList() {
  const [publicationsPerPage, setPublicationsPerPage] = useState(PUBLICATIONS_PAGE_SIZE);
  const [publicationsPageIndex, setPublicationsPageIndex] = useState(
    PUBLICATIONS_INITIAL_PAGE_INDEX
  );
  const [selectedProject, setSelectedProject] = useState<null | ProjectInterface>(null);
  const [searchProjectByName, setSearchProjectByName] = useState('');
  const [filterProjectByIdentifier, setFilterProjectByIdentifier] = useState('');

  const {
    data: projectsData,
    isLoading: isProjectsDataLoading,
    error: projectDataError,
    mutate: mutateProjectsData,
  } = useSWR<ProjectsApiResponseInterface>(
    `${ApiRoutesEnum.PUBLICATIONS}?${qs.stringify({
      page: publicationsPageIndex,
      limit: publicationsPerPage,
      query: compileQueryParams({ searchProjectByName, filterProjectByIdentifier }),
    })}`,
    fetcher
  );

  const projects = projectsData?._embedded?.title || [];

  return (
    <div className={styles.wrapper}>
      <PublicationsActionPanel
        searchProjectByName={searchProjectByName}
        setSearchProjectByName={setSearchProjectByName}
        filterProjectByIdentifier={filterProjectByIdentifier}
        setFilterProjectByIdentifier={setFilterProjectByIdentifier}
      />
      {isProjectsDataLoading && <Spin size="large" />}
      {!isProjectsDataLoading && projectDataError && (
        <Result
          status="warning"
          title={
            <div className={styles.resultWarning}>
              An error occurred, please try downloading Projects again or refreshing the page
            </div>
          }
          extra={
            <>
              <Button onClick={() => mutateProjectsData()}>Download Projects data again</Button>
              <span>or</span>
              <Button onClick={() => window.location.reload()}>Refresh the page</Button>
            </>
          }
        />
      )}

      {projectsData && projects.length > 0 && (
        <>
          <div className={styles.projectsList}>
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
              pageSize={publicationsPerPage}
              total={projectsData?.total}
              current={projectsData?.page}
              onChange={(page) => setPublicationsPageIndex(page)}
              showSizeChanger={true}
              onShowSizeChange={(newPageIndex, newSize) => {
                setPublicationsPageIndex(newPageIndex);
                setPublicationsPerPage(newSize);
              }}
              pageSizeOptions={['1', '5', '10', '20', '30', '40']}
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
