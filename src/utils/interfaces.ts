export interface ProjectInterface {
  id: number;
  license: number;
  name: string;
  created_on: string;
  icon: string | null;
  identifier: string;
}

export interface ProjectsApiResponseInterface {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  total: number;
  total_items: number;
  _embedded: {
    title: ProjectInterface[];
  };
  _links: {
    first: {
      href: string;
    };
    last: {
      href: string;
    };
    self: {
      href: string;
    };
  };
}
