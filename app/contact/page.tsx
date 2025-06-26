import type { Metadata } from 'next';
import { Contact } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | Creative Portfolio',
  description:
    'Get in touch with me for collaborations, inquiries, or just to say hello',
};

export default function ContactPage() {
  return <Contact />;
}
