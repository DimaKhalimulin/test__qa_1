import { ExpertCard } from "features"
import { NextPage } from "next"
import { mock__expert_card } from "shared/mocks/mock_expert_team"

export async function getStaticProps() {
  return {
    // returns the default 404 page in production
    notFound: process.env.NODE_ENV === 'production',
    props: {},
  }
}

const Example: NextPage = () => {

  return (
    <><div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 100,
      flexWrap: 'wrap',
      gap: '30px'
    }}>
      {mock__expert_card.map((card) => {

        return (
          // eslint-disable-next-line react/jsx-key
          <ExpertCard {...card} onClick={() => 1} />
        )
      })}
    </div></>
  )
}

export default Example
