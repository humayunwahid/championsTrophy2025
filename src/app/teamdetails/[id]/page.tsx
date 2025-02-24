import Wrapper from "@/layouts/Wrapper";
import TeamDetail from "@/components/teamdetails";
import { Metadata } from "next";

interface TeamDetailPageProps {
  params: { id: string };
}

// ✅ Fetch team data dynamically
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

  const teamName = teamData?.country || "Unknown Team"; // Extract team name dynamically
  const tournament = "ICC Champions Trophy 2025";

  const title = `${teamName} - Team Details, Squads, Rankings & News | ${tournament}`;
  const description = `Get the latest details about ${teamName} in the ${tournament}, including squad information, rankings, news, and more. Stay updated with ${teamName}'s performance.`;
  const keywords = `${teamName}, ${teamName} squad, ${teamName} rankings, ${teamName} news, ${tournament}, ICC Champions Trophy, cricket, sports, team stats`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/teamdetails/${params.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/teams/${params.id}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/team/${params.id}.webp`, // Assuming team images follow this naming pattern
          width: 1200,
          height: 630,
          alt: `${teamName} Squad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@asportstvpk",
      title,
      description,
      images: [`${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/team/${params.id}.webp`], // Twitter image
    },
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
