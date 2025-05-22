import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Home | Creative Portfolio',
  description:
    'Welcome to my creative portfolio showcasing my design work and projects',
};

export default function Home() {
  return <ClientPage />;
}
