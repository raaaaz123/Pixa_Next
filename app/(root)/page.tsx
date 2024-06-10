import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
export default async function Home() {

  const events = await getAllEvents({
    query:'',
    category:'',
    page:1,
    limit:10
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-5">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className=" flex flex-col justify-center  gap-8">
            <h1 className="h1-bold">
            Online Realistic AI Avatar Generator
            </h1>
            <p className="p-regular-20 md:p-regular-24">
            Create an AI avatar that looks just like you using the Pixa AI avatar generator online. Get your first AI avatar from a photo in seconds today!{" "}
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Generate Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Trusted By Thousands of Users</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
        </div>
<Collection
data={events?.data}
emptyTitle="No Events Found"
emptyStateSubtext="Come Back Later"
collectionType="All_Events"
limit={10}
page={1}
totalPages={2}
></Collection>

      </section>
    </>
  );
}
