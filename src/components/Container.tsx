import { classNames } from '@/utils'

export default function Container ({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-full h-full flex justify-center items-center'>
        <div
          className={classNames(
            'max-w-[393px] max-h-[768px] min-h-[768px] container mx-auto',
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
