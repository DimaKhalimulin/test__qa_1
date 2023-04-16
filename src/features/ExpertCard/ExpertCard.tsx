import { FC } from 'react'

import Image from 'next/image'

import { Avatar } from 'components'

import { ExpertCard as ExpertCardType } from 'shared/types/expertCard'

import MessagesIcon from '/public/assets/img/messages.svg'

import s from './expertCard.module.scss'

interface ExpertCardProps extends ExpertCardType {
    onClick: () => void
}

export const ExpertCard: FC<ExpertCardProps> = ({
    id,
    isOnline,
    name,
    photo,
    specialization,
    aboutExpert,
    onClick,
}) => {
    console.log(`${aboutExpert} log`)
    return (
        <div className={s.expertCard}>
            <div className={s.avatarWrapper}>
                <Avatar size={120} image={photo} />
                {isOnline && <div className={s.onlineIndicator}></div>}
            </div>

            <div className={s.name}>{name}</div>
            <div className={s.specialization}>{specialization}</div>
            <div className={s.aboutExpert}>{aboutExpert}</div>

            <div onClick={onClick} className={s.massageWrapper}>
                <Image width={24} height={24} src={MessagesIcon} title='message icon' alt='message icon' />
                <span className={s.messageText}>Message Me</span>
            </div>
        </div>
    )
}
