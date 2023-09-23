import { Layout } from '@/components';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
