
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

import AdminLogin from "@/components/admin-login";

export const metadata: Metadata = {
	title: "Admin Login"
};
 
const index = () => {
  return (
    <Wrapper>
      <AdminLogin />
    </Wrapper>
  );
};

export default index;