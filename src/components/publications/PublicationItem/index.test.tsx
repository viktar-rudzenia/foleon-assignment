import { render, screen, fireEvent } from '@testing-library/react';

import { mockProject } from '@/utils/mockData';
import PublicationItem from './index';

describe('PublicationItem', () => {
  it('renders without crashing', () => {
    render(<PublicationItem project={mockProject} setSelectedProject={() => {}} />);
    expect(screen.getByTestId('project-card')).toBeInTheDocument();
  });

  it('displays the correct project name', () => {
    render(<PublicationItem project={mockProject} setSelectedProject={() => {}} />);
    expect(screen.getByText(`Project Name: ${mockProject.name}`)).toBeInTheDocument();
  });

  it('calls setSelectedProject with the correct project on click', () => {
    const setSelectedProject = jest.fn();
    render(<PublicationItem project={mockProject} setSelectedProject={setSelectedProject} />);
    fireEvent.click(screen.getByText('Project Name: Test Project'));
    expect(setSelectedProject).toHaveBeenCalledWith(mockProject);
  });

  it('ensures Card is hoverable', () => {
    const { container } = render(
      <PublicationItem project={mockProject} setSelectedProject={() => {}} />
    );
    const card = container.querySelector('.ant-card');
    expect(card).toHaveClass('ant-card-hoverable');
  });
});
