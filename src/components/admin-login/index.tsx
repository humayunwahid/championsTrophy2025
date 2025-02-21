import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "@/common/MarqueeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import SignInForm from "./SignInForm";

import FooterTwo from '@/layouts/footers/FooterTwo';

const SignIn = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbCourses title="Admin Sign In" subtitle="Sign In" />
			<SignInForm />
			{/* <MarqueeOne style_2={true} />			 */}
			{/* <FooterTwo /> */}
		</>
	);
};

export default SignIn;
