import { notFound } from 'next/navigation';
import { ProjectDetails } from '@/components/project-details';
import projects from '@/assets/projects.json';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: `${project.title} | Creative Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Creative Portfolio`,
      description: project.description,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
