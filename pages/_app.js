import '../styles/globals.css'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './../src/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
