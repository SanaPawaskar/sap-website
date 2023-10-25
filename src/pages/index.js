import Head from 'next/head'

import Index from '@/components/Index'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sap Engineering</title>
        <meta name="description" content="At SAP Engineering, we've been at the forefront of radiator manufacturing and 
customization for an impressive 30 years.
 Our journey has been one of innovation, dedication, 
and a relentless pursuit of excellence. From locomotives to automobiles,
 from airways to industrial applications,
 our radiators have left an indelible mark on diverse industries worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 <Index/>
    </>
  )
}
