import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Champions Trophy 2025 Matches, News, Results and Teams",
  description:
    "Keep abreast of all the action from the Champions Trophy 2025! Get match schedules, latest news, live scores, team details, and expert opinions.",
  keywords:
    "Champions Trophy, Champions Trophy 2025, Champions Trophy 2025 Points Table Pakistan, Champions Trophy 2025 Schedule, Champions Trophy 2025 Schedule Points Table pdf, ICC Champions Trophy 2025 rankings, Champions Trophy 2025 net run rate, Champions Trophy 2025 team standings, Champions Trophy 2025 match results",
  
};
 
const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;