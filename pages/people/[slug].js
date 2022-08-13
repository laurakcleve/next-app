const People = ({ name }) => <h1>{name}</h1>

export default People

const people = ['jimmy', 'laura', 'woofy']

export function getServerSideProps({ params }) {
  const { slug } = params
  const name = people[slug] || 'could not find user'
  return {
    props: {
      name,
    },
  }
}
