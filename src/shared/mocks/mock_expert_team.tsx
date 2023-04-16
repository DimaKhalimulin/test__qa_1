import Alfred from '../../../public/images/alfred.svg'
import Leonid from '../../../public/images/leonid.svg'
import Lala from '../../../public/images/lala.svg'

import { ExpertCard } from 'shared/types/expertCard'

export const mock__expert_card: ExpertCard[] = [
    {
        id: 0,
        isOnline: true,
        name: 'Alfred Wirtson',
        photo: Alfred,
        specialization: 'Sales',
        aboutExpert: 'Polypropylene'
    },
    {
        id: 1,
        isOnline: false,
        name: 'Leonid Kimpembe',
        photo: Leonid,
        specialization: 'Sales',
        aboutExpert: '25+ years veteran of the polyolefin industry, currently focusing on UTEC, proprietary Ultrahigh Molecular Weight Polyethylene technology from INTEGRAL.'
    },
    {
        id: 2,
        isOnline: true,
        name: 'Lala Lelan',
        photo: Lala,
        specialization: 'Technical formulations',
        aboutExpert: 'Please reach out to me with any questions, am happy to assist you in finding the right product or learning more about our storefront.'
    },
]