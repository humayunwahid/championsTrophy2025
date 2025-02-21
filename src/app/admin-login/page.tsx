import AdminLogin from "@/components/admin-login";

import Head from "next/head";

 
const index = () => {
  return (   
      <>
      {/* Prevent search engine indexing */}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AdminLogin />
      </>
  );
};

export default index;