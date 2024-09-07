import { AllRoutesEnum, ApiRoutesEnum } from '../../src/utils/constants';

describe('Publications page', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/${AllRoutesEnum.PUBLICATIONS}`);
  });

  it('renders the Publications page', () => {
    cy.get('[data-testid="publications"]').should('exist');
  });

  it('search and filter are displayed on the page', () => {
    cy.get('[data-testid="search-by-name"]').should('exist');
    cy.get('[data-testid="filter-by-identifier"]').should('exist');
  });

  it('search input send request onchange', () => {
    const GET_API_PUBLICATIONS_WITH_TEST_SEARCH =
      'https://api.foleon.com/v2/magazine/title?page=1&limit=10&query%5B0%5D%5Bfield%5D=name&query%5B0%5D%5Btype%5D=like&query%5B0%5D%5Bvalue%5D=%25test';
    cy.get('[data-testid="search-by-name"]').type('test');
    cy.intercept(GET_API_PUBLICATIONS_WITH_TEST_SEARCH).as('getPublications');
    cy.wait('@getPublications').should('exist');
  });

  it('filter input send request onchange', () => {
    const GET_API_PUBLICATIONS_WITH_TEST_SEARCH =
      'https://api.foleon.com/v2/magazine/title?page=1&limit=10&query%5B0%5D%5Bfield%5D=identifier&query%5B0%5D%5Btype%5D=eq&query%5B0%5D%5Bvalue%5D=test2';
    cy.get('[data-testid="filter-by-identifier"]').type('test2');
    cy.intercept(GET_API_PUBLICATIONS_WITH_TEST_SEARCH).as('getPublications');
    cy.wait('@getPublications').should('exist');
  });
});
