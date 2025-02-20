import Wrapper from "@/layouts/Wrapper";
import TeamDetail from "@/components/teamdetails";
import { Metadata } from "next";

interface TeamDetailPageProps {
  params: { id: string };
}

// Fetch data on the server side
// async function getTeamData(teamId: string) {
//   const res = await fetch(`http://localhost:3001/api/squads/${teamId}`, { cache: "no-store" });
//   return res.json();
// }

async function getTeamData(teamId: string) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE_URL) {
    throw new Error("API base URL is not defined in environment variables.");
  }

  const res = await fetch(`${API_BASE_URL}/api/squads/${teamId}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}


// ✅ Dynamic Metadata Function
export async function generateMetadata({ params }: TeamDetailPageProps): Promise<Metadata> {
  const teamData = await getTeamData(params.id);

  const teamName = teamData?.country || "Unknown Team"; // teamData?.country holds the team name
  const tournament = "ICC Champions Trophy 2025";

  const title = `${teamName} - Team Details, Squads, Rankings & News | ${tournament}`;
  const description = `Get the latest details about ${teamName} in the ${tournament}, including squad information, rankings, news, and more. Stay updated with ${teamName}'s performance.`;
  const keywords = `${teamName}, ${teamName} squad, ${teamName} rankings, ${teamName} news, ${tournament}, ICC Champions Trophy, cricket, sports, team stats`;

  return {
    title,
    description,
    keywords,
  };
}

// ✅ Server Component with Async Data Fetching
export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const teamData = await getTeamData(params.id);

  return (
    <Wrapper>
      <TeamDetail teamData={teamData} teamid={params.id} />
    </Wrapper>
  );
}