import { Suspense } from "react";
import Wrapper from "@/layouts/Wrapper";
import TeamDetail from "@/components/teamdetails";

export default async function TeamDetailPage({ params }: { params: { id: string } }) {
  const teamId = params.id;
  console.log("sdasd 123" + teamId);
  // Fetch data on the server side. Using { cache: 'no-store' } ensures fresh data on every request.
  const res = await fetch(`http://localhost:3000/api/squads/${teamId}`, { cache: "no-store" });
  const teamData = await res.json();

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading team details...</div>}>
        <TeamDetail teamData={teamData} teamid={teamId} />
      </Suspense>
    </Wrapper>
  );
}
