 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import FixturesList from '@/components/fixtures';



import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Champions Trophy 2025 Fixtures",
	description: "Champions Trophy 2025 Fixtures",
	keywords: "Champions Trophy 2025 Fixtures, results",
};


const index = () => {
  return (
    <Wrapper>
      <FixturesList />
    </Wrapper>
  );
};

export default index;