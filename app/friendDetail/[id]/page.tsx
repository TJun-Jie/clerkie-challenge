import { Suspense } from 'react';
import FriendDetail from '../../components/Friends/FriendDetail';

interface PageProps {
    params: {id : string}
}

const Page = ({ params }) => {
  
    return (
        <Suspense fallback={<div>Loading.....</div> }>
            {/* @ts-expect-error Async Server Component */}
            <FriendDetail id={parseInt(params.id)} />
        </Suspense>
    );
  };


export default Page;