import React from 'react'

type UserProps = {
  children: React.ReactNode
};

export default function Card(props: UserProps) {
  return (
    <div className='card'>
      {props.children}
    </div>
  )
}
