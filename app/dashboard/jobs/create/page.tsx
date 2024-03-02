import dynamic from 'next/dynamic';
import { useMemo } from 'react';

  export default function CreateJob() {

    const ClientComponent = useMemo(
      () =>
        dynamic(() => import("../../../../dashboard_components/client_components"), {
          ssr: false,
        }),
      []
    );
  
  return (
   <>
   {/* <DetailJob /> */}

   <ClientComponent />

   
   </>
  )
}
