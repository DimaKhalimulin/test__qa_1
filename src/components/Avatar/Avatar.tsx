import { FC } from 'react'
import Image from 'next/image'

import { ImageProps } from '@nextui-org/react'
import cn from 'classnames'

import s from './Avatar.module.scss'

interface AvatarProps {
  image: ImageProps['src']
  withBorder?: boolean
  className?: string
  size?: number
}

export const Avatar: FC<AvatarProps> = ({
  image,
  className,
  withBorder = false,
  size = 41,
}) => {
  return (
    <div className={cn(s.wrapper, { [s.withBorder]: withBorder }, className)}>
      <Image
        src={image}
        alt=''
        className={s.avatar}
        width={size}
        height={size}
      />
    </div>
  )
}
