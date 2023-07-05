import ComponentA from '@/components/ComponentA';
import ComponentAServer from '@/components/ComponentAServer';
import ComponentB from '@/components/ComponentB';
import ComponentBServer from '@/components/ComponentBServer';
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <h3 className="font-bold">Suspense with React Server components</h3>
      <Suspense fallback={<p>loading...</p>}>
        <ComponentAServer />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <ComponentBServer />
      </Suspense>
      <Separator className="my-4"></Separator>
      <h3 className="font-bold">Suspense with Client Side Rendering</h3>
      <Suspense fallback={<p>loading...</p>}>
        <ComponentA />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <ComponentB />
      </Suspense>
    </div>
  );
};

export default page;
