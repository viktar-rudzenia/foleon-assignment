import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PublicationsActionPanel from './index';

describe('PublicationsActionPanel', () => {
  let mockSetSearchProjectByName: jest.Mock;
  let mockSetFilterProjectByIdentifier: jest.Mock;

  beforeEach(() => {
    mockSetSearchProjectByName = jest.fn();
    mockSetFilterProjectByIdentifier = jest.fn();
  });

  const renderComponent = (searchProjectByName: string, filterProjectByIdentifier: string) => {
    render(
      <PublicationsActionPanel
        searchProjectByName={searchProjectByName}
        setSearchProjectByName={mockSetSearchProjectByName}
        filterProjectByIdentifier={filterProjectByIdentifier}
        setFilterProjectByIdentifier={mockSetFilterProjectByIdentifier}
      />
    );
  };

  it('renders the component correctly', () => {
    renderComponent('', '');

    expect(screen.getByText('Search by name:')).toBeInTheDocument();
    expect(screen.getByText('Filter by identifier:')).toBeInTheDocument();
  });

  it('displays the correct initial values', () => {
    renderComponent('initial name', 'initial identifier');

    const searchByNameInput = screen.getByTestId('search-by-name');
    const filterByIdentifierInput = screen.getByTestId('filter-by-identifier');

    expect(searchByNameInput).toHaveValue('initial name');
    expect(filterByIdentifierInput).toHaveValue('initial identifier');
  });

  it('calls the appropriate functions on input change', async () => {
    renderComponent('', '');

    const searchByNameInput = screen.getByTestId('search-by-name');
    const filterByIdentifierInput = screen.getByTestId('filter-by-identifier');

    fireEvent.change(searchByNameInput, { target: { value: 'test name' } });
    fireEvent.change(filterByIdentifierInput, { target: { value: 'test identifier' } });

    await waitFor(() => {
      expect(mockSetSearchProjectByName).toHaveBeenCalledWith('test name');
      expect(mockSetFilterProjectByIdentifier).toHaveBeenCalledWith('test identifier');
    });
  });

  it('calls debounced functions after delay', async () => {
    jest.useFakeTimers();
    renderComponent('', '');

    const searchByNameInput = screen.getByTestId('search-by-name');
    const filterByIdentifierInput = screen.getByTestId('filter-by-identifier');

    fireEvent.change(searchByNameInput, { target: { value: 'debounced name' } });
    fireEvent.change(filterByIdentifierInput, { target: { value: 'debounced identifier' } });

    jest.advanceTimersByTime(300);

    await waitFor(() => {
      expect(mockSetSearchProjectByName).toHaveBeenCalledWith('debounced name');
      expect(mockSetFilterProjectByIdentifier).toHaveBeenCalledWith('debounced identifier');
    });

    jest.useRealTimers();
  });
});
