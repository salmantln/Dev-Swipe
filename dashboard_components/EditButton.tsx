import Link from 'next/link';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline';
import { Button } from '@tremor/react';
export function UpdateJob({ id, title }: { id: string, title:string }) {
    return (

       
      <Link
        href={`/dashboard/jobs/${id}`}
        className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
      >
       {title}
      </Link>
    );
  }

  