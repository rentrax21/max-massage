import { CityPageContent, cityMetadata } from "@/components/CityPageContent";

export const metadata = cityMetadata("masaz-katowice");

export default function Page() {
  return <CityPageContent slug="masaz-katowice" />;
}
