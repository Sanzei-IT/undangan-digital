import { WeddingInvitation } from "@/components/wedding/wedding-invitation"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const guestName = typeof params.to === "string" ? params.to : "Tamu Undangan"

  return <WeddingInvitation guestName={guestName} />
}
