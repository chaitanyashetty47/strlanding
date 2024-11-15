import Error from 'next/error';
import { NextPageContext } from 'next';

interface PageProps {
  statusCode: number ;
}

function Page({ statusCode }: PageProps) {
  return <Error statusCode={statusCode}></Error>;
}


Page.getInitialProps = ({ res, err }: NextPageContext): PageProps => {
  // Ensure we always return a number by defaulting to 404
  const statusCode: number = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default Page;