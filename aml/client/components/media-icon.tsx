import { cn } from "@/lib/utils";
import { Media } from "@/types/media"
import { BookIcon, DiscIcon, GamepadIcon } from "lucide-react"

interface Props {
  mediaType: Media['mediaType']
  className?: string
}

export default function MediaIcon({ mediaType, className }: Props) {
  const baseClass = "w-4 h-4";

  if (mediaType === 'book') {
    return <BookIcon className={cn(baseClass, className)} />
  }

  if (mediaType === 'cd') {
    return <DiscIcon className={cn(baseClass, className)} />
  }

  if (mediaType === 'game') {
    return <GamepadIcon className={cn(baseClass, className)} />
  }

  return null
}