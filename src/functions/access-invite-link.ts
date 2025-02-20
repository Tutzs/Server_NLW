import { redis } from "../redis/client";

interface AccessInviteLinkParams{
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams){
  await redis.hincrby('referral:acess-count', subscriberId, 1)
}
