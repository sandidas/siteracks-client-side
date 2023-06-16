import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";

const CareerOpenPositions = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 text-center space-y-10">
      <SectionTitle title="Open Positions">Browse through our open positions, and if you see a role that interests you, feel free to apply.</SectionTitle>
      <Button component="a" href={`${process.env.ASK_ME}/join-siteracks`} size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
        Apply Here
        <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
      </Button>
    </div>
  );
};

export default CareerOpenPositions;
