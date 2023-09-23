import { Layout } from '@/components';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
