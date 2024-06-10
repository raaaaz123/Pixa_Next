import { IEvent } from '@/lib/database/models/event.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import { auth } from '@clerk/nextjs/server'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === "";

  return (
<div className="relative flex min-h-[300px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[278px]">
  
      <Link
        href={`/events/${event._id}`}
        className="link-background  flex-grow bg-gray-50 bg-cover bg-center text-grey-500 md:min-h-[338px]"
        style={{
          backgroundImage: `url(${event.url1})`,
          maxWidth: "100%",
          maxHeight: "100%"
        }}
      >
        {/* Link Content */}
      </Link>
    </div>
  )
}

export default Card;
