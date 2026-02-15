import Image from "next/image"
import { LandmarkCardProps } from "@/utils/types"
import LandmarkRating from "./LandmarkRating"
import FavoriteToggleButton from "./FavoriteToggleButton"

export default function LandmarkCard({ landmark }: { landmark: LandmarkCardProps }){
  const { id, name, description, price, image, province, lat, lng, category } = landmark

  return (
    <article className="relative group">
      <div className="relative h-75 rounded-lg border overflow-hidden">
        <Image 
          src={landmark.image}
          alt={landmark.name}
          width={400}
          height={300}
          className="object-cover rounded-lg group-hover:scale-102 transition-all duration-300"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <LandmarkRating />
      </div>

      <p className="font-light mt-1 break-after-all line-clamp-4">{description}</p>

      <div className="mt-1 flex items-center justify-between">
        <span className="font-semibold">THB {price}</span>
        <p>{province}</p>
      </div>

      <div className=" absolute top-5 right-5 z-2">
        <FavoriteToggleButton landmarkId={id} />
      </div>

    </article>
  )
}