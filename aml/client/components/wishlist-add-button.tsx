import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from 'next/navigation'
import React from "react";
import { Media } from "@/lib/types";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";


interface Props {
  item: Media;
}

export function WishlistAddButton({ item }: Props) {
  const router = useRouter();

  const { data: session } = useSession();

  const addToWishlist = async () => {
    try {
      if (!session) {
        toast.error('Please sign in to add to wishlist');
        router.push('/signin');
        return;
      }

      await axios.post(`/api/wishlist/media/${item._id}`);

      toast.success(`Successfully added to wishlist "${item.title}"`);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error('Failed to add to the item to wishlist');
    }
  };

  return (
    <Button variant='outline' onClick={addToWishlist}>
      <Heart className="h-4 w-4" />
      Add to Wishlist
    </Button>
  )
}
