import Link from 'next/link'
import Image from 'next/image'

import Container from '@/components/Container'

import { useDragPreventionProps } from '@/hooks/useUtilityProps'

import { useCreationYear, useLayoutSize } from '@/utils'

export default function Index () {
  const creationYear = useCreationYear(2023)
  const preventionProps = useDragPreventionProps()
  const layout = useLayoutSize()

  return (
    <Container className='bg-head'>

      <div className='py-40 h-full'>
        <div className='flex relative justify-center w-full h-fit mb-40'>
          <Image alt='TETRO White' src='/assets/TETRO_WHITE_2.png' width={layout.width / 1.4} height={layout.height / 1.4} priority {...preventionProps} className='absolute z-[1]' />
          <Image alt='TETRO White' src='/assets/TETRO_BLACK_2.png' width={layout.width / 1.4} height={layout.height / 1.4} priority {...preventionProps} className='absolute top-[7px]' />
        </div>

        <div className=''>
          <Link
            as='div'
            href='/tetro/search'
          >
            시작하기
          </Link>
          <Link
            as='div'
            href='/tetro/help'
          >
            도움말
          </Link>
        </div>
      </div>

    </Container>
  )
}
