import { DetailJob } from '@/dashboard_components/DetailJob'
import ClientComponent from '@/dashboard_components/client_components'
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react'

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
