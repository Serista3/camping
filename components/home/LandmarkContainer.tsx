import { getLandmarks } from "@/action/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";

export default async function LandmarkContainer(){
  const landmarks: LandmarkCardProps[] = await getLandmarks()

  return (
    <div>
      <LandmarkList landmarks={landmarks} />
    </div>
  )
}