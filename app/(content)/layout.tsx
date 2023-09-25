import { Layout } from '@/components';
import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
