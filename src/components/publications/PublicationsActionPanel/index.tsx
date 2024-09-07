'use client';

import { useState } from 'react';
import { Input } from 'antd';
import { useDebouncedCallback } from 'use-debounce';

import styles from './index.module.scss';

export default function PublicationsActionPanel({
  searchProjectByName,
  setSearchProjectByName,
  filterProjectByIdentifier,
  setFilterProjectByIdentifier,
}: {
  searchProjectByName: string;
  setSearchProjectByName: (searchProjectByName: string) => void;
  filterProjectByIdentifier: string;
  setFilterProjectByIdentifier: (filterProjectByIdentifier: string) => void;
}) {
  const [currentSearchByName, setCurrentSearchByName] = useState(searchProjectByName);
  const [currentfilterByIdentifier, setCurrentfilterByIdentifier] =
    useState(filterProjectByIdentifier);

  const debouncedSetProjectByName = useDebouncedCallback((value) => {
    setSearchProjectByName(value);
  }, 300);

  const debouncedSetProjectByIdentifier = useDebouncedCallback((value) => {
    setFilterProjectByIdentifier(value);
  }, 300);

  const handleSearchByNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchByName(e.target.value);
    debouncedSetProjectByName(e.target.value);
  };

  const handleFilterByIdentifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentfilterByIdentifier(e.target.value);
    debouncedSetProjectByIdentifier(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <span>Search by name:</span>
        <Input
          data-testid="search-by-name"
          type="text"
          value={currentSearchByName}
          onChange={handleSearchByNameChange}
        />
      </div>
      <div>
        <span>Filter by identifier:</span>
        <Input
          data-testid="filter-by-identifier"
          type="text"
          value={currentfilterByIdentifier}
          onChange={handleFilterByIdentifier}
        />
      </div>
    </div>
  );
}
