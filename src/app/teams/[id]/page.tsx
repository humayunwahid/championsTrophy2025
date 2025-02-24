import Wrapper from "@/layouts/Wrapper";
import TeamDetail from "@/components/teamdetails";
import { Metadata } from "next";

interface TeamDetailPageProps {
  params: { id: string };
}

const toTitleCase = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


// ✅ Fetch team data dynamically
async function getTeamData(teamId: string) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE_URL) {
    throw new Error("API base URL is not defined in environment variables.");
  }

  // Normalize ID by replacing hyphens with spaces
  const normalizedId = teamId.replace(/-/g, ' '); 

  const res = await fetch(`${API_BASE_URL}/api/squads/${normalizedId}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// ✅ Dynamic Metadata Function
export async function generateMetadata({ params }: TeamDetailPageProps): Promise<Metadata> {
  // Normalize ID before fetching
  const normalizedId = params.id.replace(/-/g, ' '); 
  const teamData = await getTeamData(normalizedId);

  const teamName = teamData?.country ? toTitleCase(teamData.country) : "Unknown Team";

  const tournament = "ICC Champions Trophy 2025";
  const title = `${teamName} Squads, Rankings, News & Team Details | ${tournament}`;
  const description = `Get the latest details about ${teamName} in the ${tournament}, including squad information, rankings, news, and more. Stay updated with ${teamName}'s performance.`;
  const keywords = `${teamName}, ${teamName} squad, ${teamName} rankings, ${teamName} news, ${tournament}, ICC Champions Trophy, cricket, sports, team stats`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_BASE_URL}/teams/${params.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/teams/${params.id}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/team/${params.id}.webp`,
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
      images: [`${process.env.NEXT_PUBLIC_API_BASE_URL}/assets/img/team/${params.id}.webp`],
    },
  };
}

// ✅ Server Component with Async Data Fetching
export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const normalizedId = params.id.replace(/-/g, ' '); // Normalize before fetching
  const teamData = await getTeamData(normalizedId);

  return (
    <Wrapper>
      <TeamDetail teamData={teamData} teamid={params.id} />
    </Wrapper>
  );
}
