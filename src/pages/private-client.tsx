import withAuth from '../utils/withAuth'

function PrivateClient() {
  return <div>Private Client</div>
}

export default withAuth(PrivateClient)
