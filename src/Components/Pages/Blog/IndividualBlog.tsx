import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import { RemoveTags } from "@/Helpers/RemoveTags";
import { timeSince } from "@/Helpers/timeSince";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import BlogReactions from "./BlogReactions";

interface IProps {
  blog: IBlog;
}

const IndividualBlog: FC<IProps> = ({ blog }) => {
  const router = useRouter();
  const ASKME_URL = process.env.ASK_ME;
  // = = = = = =  = = =
  // AVATAR CONFIG
  // = = = = = =  = = =
  let userAvatar;
  let userName;
  let firstName;

  if (blog?.authorImage) {
    userAvatar = blog?.authorImage;
  }
  if (blog?.authorName) {
    userName = blog?.authorName.slice(0, 2);
    firstName = blog?.authorName.split(" ")[0];
  }

  // = = = = = =  = = =
  // BODY TEXT
  // = = = = = =  = = =
  const removeTagsText = RemoveTags(blog?.text);
  const words = removeTagsText.split(" ");
  const blogLimitedWord = words.slice(0, 20).join(" ");

  // = = = = = =  = = =
  // Conversation date to time since
  // = = = = = =  = = =
  const createdAt = new Date(blog?.createdAt);
  const updatedAt = new Date(blog?.updatedAt);
  const createdAtTimeSince = timeSince(createdAt);
  const updatedAtTimeSince = timeSince(updatedAt);

  return (
    <>
      <FeatureCard>
        <div className="space-y-5">
          <Link href={`${ASKME_URL}/blog/${blog?.slug}`} className="flex">
            {blog?.featuredImage ? (
              <Image className="w-full max-h-96" src={`https://${process.env.BUCKET_NAME_AWS}.s3.${process.env.REGION_AWS}.amazonaws.com/${blog?.featuredImage}`} alt={blog?.subject} width={600} height={200} />
            ) : (
              <Image className="w-full max-h-96" src={"https://siteracks-content.s3.us-west-2.amazonaws.com/images/blogs/SiteRacks-Blog-Default-Image-medium-1689098222464-451445088.jpg"} alt={blog?.subject} width={600} height={200} />
            )}
          </Link>
          <Link href={`${ASKME_URL}/blog/${blog?.slug}`} className="flex">
            <h3 className="text-title font-bold text-3xl group-hover:text-primary">{blog?.subject}</h3>
          </Link>
          <div className="text-text leading-8">{blogLimitedWord}.....</div>
        </div>
        <div className="grow"></div>

        {/*
        // = = = = = = = = =  
        // USER AVATER
        // = = = = = = = = = 
        */}
        <div className="flex justify-between pt-10 pb-5">
          <BlogReactions answers={blog?.answers} reactions={blog?.reactions} />

          <UnstyledButton className="group grow flex justify-end" component="a" href={`${ASKME_URL}/blog/${blog?.slug}`}>
            <ArrowRightIcon className="h-6 w-6 group-hover:fill-primary group-hover:mr-2" />
          </UnstyledButton>
        </div>

        <div className="space-y-5">
          <div className="flex items-center space-x-5">
            <div className="shadow-md bg-primary rounded-full">
              {userAvatar ? (
                <Avatar radius="xl" size="md" src={userAvatar} alt="S" />
              ) : (
                <Avatar color="cyan" radius="xl" size="md" className="cursor-pointer uppercase">
                  {userName ? userName : "SR"}
                </Avatar>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bold capitalize">{firstName ?? firstName}</span>
              <small className="text-xs">
                Created {createdAtTimeSince} | Updated {updatedAtTimeSince}
              </small>
            </div>
          </div>
        </div>
      </FeatureCard>
    </>
  );
};

export default IndividualBlog;
