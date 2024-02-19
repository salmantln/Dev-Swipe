// import React from 'react'
// import ClientComponent from '../../../dashboard_components/client_components'
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";

export default function  JobPostPage () {
  const ClientComponent = useMemo(() => dynamic(() => import('../../../dashboard_components/client_components'), { ssr: false }),[]);

  return (
    <>
        <ClientComponent/>
    </>

  )
}
