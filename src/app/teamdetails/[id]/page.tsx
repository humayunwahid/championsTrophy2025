import { useRouter } from "next/navigation"; // Correct for App Router
import { Suspense } from "react";
import Wrapper from "@/layouts/Wrapper";
import TeamDetail from "@/components/teamdetails";

const TeamDetailPage = ({ params }: { params: { id: string } }) => {
  const teamId = params.id; // Extract dynamic ID

  return (
    <Wrapper>
      
        <TeamDetail teamid={teamId} />
  
    </Wrapper>
  );
};

export default TeamDetailPage;