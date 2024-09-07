export const PUBLICATIONS_PAGE_SIZE = 10;
export const PUBLICATIONS_INITIAL_PAGE_INDEX = 1;

export const compileQueryParams = ({
  searchProjectByName,
  filterProjectByIdentifier,
}: {
  searchProjectByName: string;
  filterProjectByIdentifier: string;
}) => {
  const queryParams = [];
  if (searchProjectByName) {
    queryParams.push({ field: 'name', type: 'like', value: `%${searchProjectByName}` });
  }

  if (filterProjectByIdentifier) {
    queryParams.push({
      field: 'identifier',
      type: 'eq',
      value: filterProjectByIdentifier,
    });
  }

  return queryParams;
};
