'use client'

import { toggleFavoriteAction } from "@/action/actions"
import FormContainer from "../form/FormContainer"
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { CardSumbitButton } from "../form/SubmitButton";

type FavoriteToggleFormProps = {
  favoriteId: string | null;
  landmarkId: string;
}

export default function FavoriteToggleForm({ favoriteId, landmarkId }: FavoriteToggleFormProps){
  const pathName = usePathname()
  const toggleAction = toggleFavoriteAction.bind(null, { favoriteId, landmarkId, pathName })

  return (
    <FormContainer action={toggleAction}>
      <CardSumbitButton isFav={favoriteId ? true : false} />
    </FormContainer>
  )
}