import { getFavorites } from "@/action/actions"
import LandmarkList from "@/components/home/LandmarkList"

export default async function Favorites(){
    const favorites = await getFavorites()

    return (
        <LandmarkList landmarks={favorites} />
    )
}