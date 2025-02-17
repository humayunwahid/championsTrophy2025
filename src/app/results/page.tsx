 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import ResultList from '@/components/results';


import { Metadata } from 'next';


export const metadata: Metadata = {
	title: "Champions Trophy 2025 Fixtures",
	description: "Champions Trophy 2025 Fixtures",
	keywords: "Champions Trophy 2025 Fixtures, results",
};


const index = () => {
  return (
    <Wrapper>
      <ResultList />
    </Wrapper>
  );
};

export default index;