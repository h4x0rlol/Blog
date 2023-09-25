import { Layout } from '@/components';
import { ReactNode } from 'react';

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
