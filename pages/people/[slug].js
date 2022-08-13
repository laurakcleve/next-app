const People = ({ name }) => <h1>{name}</h1>

export default People

export async function getServerSideProps({ params }) {
  const { slug } = params
  const result = await fetch(`https://swapi.dev/api/people/${slug}`).then((res) =>
    res.json()
  )
  console.log(result)

  const person = result.detail ? { name: 'Not found' } : result

  return {
    props: { ...person },
  }
}
