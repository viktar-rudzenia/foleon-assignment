import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProjectInterface } from '@/utils/interfaces';
import { mockProject } from '@/utils/mockData';
import PublicationItemDetailed from './index';

describe('PublicationItemDetailed', () => {
  const project: ProjectInterface = mockProject;

  it('renders the component correctly', () => {
    render(<PublicationItemDetailed project={project} />);

    expect(screen.getByText(`Name: ${project.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Identifier: ${project.identifier}`)).toBeInTheDocument();
    expect(screen.getByText(`Created: ${project.created_on}`)).toBeInTheDocument();
    expect(screen.getByText(`Modified: ${project.modified_on}`)).toBeInTheDocument();
    expect(screen.getByText(`Affected: ${project.affected_on}`)).toBeInTheDocument();
  });

  it('renders the image with correct src and alt attributes', () => {
    render(<PublicationItemDetailed project={project} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', project.name);
    const src = new URL(image.getAttribute('src') as string, 'http://localhost');
    expect(src.searchParams.get('url')).toBe(project.icon);
  });

  it('renders the placeholder image when icon is not provided', () => {
    const projectWithoutIcon = { ...project, icon: '' };
    render(<PublicationItemDetailed project={projectWithoutIcon} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', project.name);
    const src = new URL(image.getAttribute('src') as string, 'http://localhost');
    expect(src.searchParams.get('url')).toBe('/project-icon-placeholder.png');
  });

  it('renders correctly with missing optional fields', () => {
    const projectWithMissingFields = {
      ...project,
      created_on: '',
      modified_on: '',
      affected_on: '',
    };
    render(<PublicationItemDetailed project={projectWithMissingFields} />);

    expect(screen.getByText(`Name: ${project.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Identifier: ${project.identifier}`)).toBeInTheDocument();
    expect(screen.queryByText(`Created: ${project.created_on}`)).not.toBeInTheDocument();
    expect(screen.queryByText(`Modified: ${project.modified_on}`)).not.toBeInTheDocument();
    expect(screen.queryByText(`Affected: ${project.affected_on}`)).not.toBeInTheDocument();
  });

  it('renders correctly with long text fields', () => {
    const longText = 'a'.repeat(1000);
    const projectWithLongText = {
      ...project,
      name: longText,
      identifier: longText,
    };
    render(<PublicationItemDetailed project={projectWithLongText} />);

    expect(screen.getByText(`Name: ${longText}`)).toBeInTheDocument();
    expect(screen.getByText(`Identifier: ${longText}`)).toBeInTheDocument();
  });

  it('renders correctly with special characters in text fields', () => {
    const specialText = '<script>alert("test")</script>';
    const projectWithSpecialText = {
      ...project,
      name: specialText,
      identifier: specialText,
    };
    render(<PublicationItemDetailed project={projectWithSpecialText} />);

    expect(screen.getByText(`Name: ${specialText}`)).toBeInTheDocument();
    expect(screen.getByText(`Identifier: ${specialText}`)).toBeInTheDocument();
  });
});
