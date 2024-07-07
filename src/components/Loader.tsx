import { useEffect, useState } from 'react'
import Router from 'next/router'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

import { useDragPreventionProps } from '@/hooks/useUtilityProps'

export default function ProgressBar () {
  const [show, setShow] = useState<boolean>(false)

  const preventionProps = useDragPreventionProps()

  useEffect(() => {
    Router?.events.on('routeChangeStart', (_: string, { shallow }: { shallow: boolean }) => shallow || setShow(true))
    Router?.events.on('routeChangeComplete', (_: string, { shallow }: { shallow: boolean }) => shallow || setShow(false))
    Router?.events.on('routeChangeError', (_: string, { shallow }: { shallow: boolean }) => shallow || setShow(false))
  }, [])

  return (
    <Transition
      show={show}
      enter='ease-out duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='absolute w-full h-full inset-0 bg-head z-[99] flex'>
        <div className='flex relative max-w-[200px] min-w-[200px] max-h-[50px] min-h-[50px] mx-auto self-center animate-pulse'>
          <Image alt='TETRO White' src='/assets/TETRO_WHITE_2.png' width={400} height={890} priority className='absolute z-[1]' {...preventionProps} />
          <Image alt='TETRO Black' src='/assets/TETRO_BLACK_2.png' width={400} height={890} priority className='absolute left-[5px] top-[5px]' {...preventionProps} />
        </div>
      </div>
    </Transition>
  )
}
