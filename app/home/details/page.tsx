import Container from "@/app/ui/details/Container";
import { Suspense } from "react";

const page = async ({
    searchParams,
  }: {
    searchParams?: {
      id?: string;
    };
  }) => {
    const id = (searchParams?.id || "");
  return (
    <Suspense>
        <Container id={id}/>
    </Suspense>
  )
}

export default page