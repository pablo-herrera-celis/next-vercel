import Link from 'next/link';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
        {/* Ir a <a href="/">Home</a> */}
      </h1>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/about.tsx</code>
      </p>
    </>
  );
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
export default Page;
