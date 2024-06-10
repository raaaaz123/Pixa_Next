import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import {
  Container,
  HStack,
  IconButton,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Cropper from "@/components/shared/Cropper";
import { MdDarkMode } from "react-icons/md";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: "66656620051227048189286a",
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.url1}
            alt="hero image"
            width={400}
            height={200}
            className="h-full min-h-[100px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>

           
            </div>

            <Container maxW={"container.lg"} pt={3}>
              <Cropper />
            </Container>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Generate Avatar</Link>
            </Button>

            <div className="flex flex-col gap-5"></div>
          </div>
        </div>
      </section>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Styles</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Styles Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
