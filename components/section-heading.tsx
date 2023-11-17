import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
}

/* child props are About Skills Contact in their components : typescript stuff*/
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8">
        {children}
    </h2>
  )
}
