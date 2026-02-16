import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import { SignInCardButton } from '../form/SubmitButton';
import { getFavoriteId } from '@/action/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

export default async function FavoriteToggleButton({ landmarkId }: { landmarkId: string }){
  const { userId } = await auth()
  
  if(!userId) return <SignInCardButton />
  const favId = await getFavoriteId({ landmarkId })

  return (
    <FavoriteToggleForm favoriteId={favId} landmarkId={landmarkId} />
  )
}