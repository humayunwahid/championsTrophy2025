import CT2025 from "@/components/homes/ct2025";
import HomeOne from "@/components/homes/home"; 
import HomeTwo from "@/components/homes/home-2";
import HomeThree from "@/components/homes/home-3";
import HomeFour from "@/components/homes/home-4";
import HomeFive from "@/components/homes/home-5";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
// meta data

export const metadata: Metadata = {
	title: "Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
	return (
		<Wrapper>
			<CT2025 />    
		</Wrapper>
	);
};

export default index;
