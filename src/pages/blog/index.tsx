import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import { Button, Group, Loader, TextInput, UnstyledButton } from "@mantine/core";
import axios from "axios";
import React, { ChangeEvent, useEffect, useRef, useState, FC } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import IndividualBlog from "@/Components/Pages/Blog/IndividualBlog";
import BlogBanner from "@/Components/Pages/Blog/BlogBanner";
import { ArrowDownIcon, ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
interface ICResponse {
  blogs: IBlog[];
  nextCursor: string;
}

interface IProps {
  metaData: IHeadData;
}

const BlogIndex: FC<IProps> = ({ metaData }) => {
  // = = = = = =  = = =
  // CONFIGURATION LOADERS
  // = = = = = =  = = =
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  const [postLimit, setPostLimit] = useState(6);

  // = = = = = =  = = =
  // SEARCH KEYWORD CONTEXT. THE VALUES COMES FROM HEADER
  // = = = = = =  = = =
  // WE ARE GETTING SEARCH KEYWORD FROM CONTEXT
  // Bellow I am using a useEffect hook, when we have text in search Keywords the useEffect hook will apply to call refetching.
  const [searchKeyword, setSearchKeyword] = useState("");
  const [inputText, setInputText] = useState("");

  // = = = = = =  = = = =
  // QUERY WITH INFINITE LOADER : TENSTACK REACT QUERY
  // = = = = = =  = = = =

  // STEP 1: FETCHING DATA FOR REACT QUERY
  //
  const fetchUsersData = async ({ pageParam = 0, keyword, limit }: { pageParam?: number; keyword?: string; limit: number }) => {
    //@ts-ignore
    const response: ICResponse = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/blogs?cursor=${pageParam}&limit=${limit}&keyword=${keyword}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response;

    // ICResponse
  };
  // STEP 2: Call the useInfiniteQuery hook to fetch the items
  const { data, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["blogs"], // A key to identify this query
    queryFn: ({ pageParam = 0 }) => fetchUsersData({ pageParam, keyword: searchKeyword, limit: postLimit }), // A function that returns the data
    // initialData: {
    //   pages: [{ blogs: initialDataSSR?.blogs, nextCursor: initialDataSSR?.nextCursor }],
    //   pageParams: [initialDataSSR?.nextCursor],
    // },
    getNextPageParam: (lastPage, allPages) => {
      // A function that tells React Query how to get the next page
      if (!lastPage || lastPage.blogs === undefined) {
        // add a check to make sure lastPage is truthy
        return false;
      } else if (lastPage?.blogs.length < 10) {
        return false;
      } else {
        return lastPage.nextCursor;
      }
    },
    // enabled: !!session, // Enable or disable the query based on session availability
    // keepPreviousData: true,
    // staleTime: 1000 * 1, // no refetch within this time
    // refetchInterval: 1000 * 60 * 10, // refetch within this time
    // cacheTime: 1000 * 60 * 10, // 5 minutes (data expires and triggers background fetch after 10 minutes)
    refetchOnWindowFocus: false, // that true when site is live
    refetchOnReconnect: true, //** */
  });

  // console.log("blog hasNextPage", hasNextPage);
  // console.log("data", data);
  // = = = = = = = = = = = = = = = =
  // STEP 3: LOAD WHILE PAGE SCROLLING DOWN
  // = = = = = = = = = = = = = = = =

  // STEP 3.1: Create a ref to the last item in the list
  const lastItemRef = useRef<HTMLDivElement>(null);

  // STEP 3.2: Create a ref to an IntersectionObserver instance
  const observer = useRef<IntersectionObserver | null>(null);
  // NOTE: the Intersection Observer is an API that allows you to efficiently detect when an element enters or exits the viewport (the visible area of a web page). It is commonly used for implementing lazy loading of images, infinite scrolling, or triggering animations based on the visibility of elements.

  // STEP 3.3: Use the useEffect hook to set up the IntersectionObserver
  // useEffect(() => {
  //   if (lastItemRef.current) {
  //     observer.current = new IntersectionObserver(
  //       (entries) => {
  //         const target = entries[0];
  //         // STEP 3.3: If the target is intersecting with the viewport and we have a next page and we're not currently fetching data, fetch the next page
  //         if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
  //           fetchNextPage();
  //         }
  //       },
  //       { threshold: 1 } // STEP 3.3: Only fire when the target is completely visible
  //     );
  //     // STEP 3.4: Observe the last item
  //     observer.current.observe(lastItemRef.current);
  //   }
  //   //  STEP 3.5: Clean up the observer when the component is unmounted
  //   return () => {
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //   };
  // }, [lastItemRef, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // # LOAD WHILE PAGE SCROLLING DOWN
  //
  // = = = = = =  = = =
  // REFETCH HANDLER
  // = = = = = =  = = =

  const handleRefetch = () => {
    refetch();
  };

  // = = = = = =  = = =
  // SEARCH CONFIGURATION
  // = = = = = =  = = =
  // Using this useEffect when user type and hit enter the useEffect will fire and hit refetch for new query.
  useEffect(() => {
    if (searchKeyword !== null) {
      refetch();
    }
  }, [searchKeyword, refetch]);
  //
  //
  // = = = = = =  = = =
  // SEARCH
  // = = = = = =  = = =
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      // Enter key is pressed
      // Perform the desired action here, such as setting the search keyword
      setSearchKeyword(inputText);
    }
  };

  // = = = = = =  = = =
  // RETURN
  // = = = = = =  = = =
  if (status === "loading" && !data) {
    // Show loading state while fetching initial data
    return (
      <div className="flex justify-center">
        <Loader size="xl" />
      </div>
    );
  }
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main className="max-w-screen-2xl mx-auto space-y-10 flex flex-col min-h-screen">
        <BlogBanner />

        <Group>
          <div className="flex w-full items-center border dark:border-gray-800  py-3 dark:bg-slate-800 bg-slate-50">
            <TextInput variant="unstyled" className="px-5 w-11/12 text-lg font-bold" placeholder="Search Here" onKeyDown={handleKeyDown} value={inputText} onChange={handleInputChange} />
            {searchKeyword ? (
              <UnstyledButton
                onClick={() => {
                  setSearchKeyword("");
                }}
              >
                <XMarkIcon className="w-4 h-4 xl:w-6 xl:h-6 fill-slate-400 dark:fill-slate-400 hover:fill-primary dark:hover:fill-primary" />
              </UnstyledButton>
            ) : (
              <UnstyledButton
                onClick={() => {
                  setSearchKeyword(inputText);
                }}
              >
                <ArrowLongRightIcon className="w-4 h-4 xl:w-6 xl:h-6 fill-slate-400 dark:fill-slate-400 hover:fill-primary dark:hover:fill-primary" />
              </UnstyledButton>
            )}
          </div>
        </Group>

        {/* 
  // = = = = = = = = =
  // BLOGS
  // = = = = = = = = =
        */}

        <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 2xl:grid-cols-3">
          {data?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page?.blogs?.map((blog: IBlog, index: number) => (
                <IndividualBlog key={index} blog={blog} />
              ))}
            </React.Fragment>
          ))}
          {/* //  STEP 4: Create a ref to the last item in the list */}
          <div ref={lastItemRef} />
          <div></div>
          <div>
            {/* STEP 5: Create a ref to the last item in the list */}
            {/* {isFetchingNextPage && <div>Loading more...</div>} */}
            {isFetching && !isFetchingNextPage ? (
              <div className="flex justify-center">
                <Loader size="xl" />
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex justify-center pt-7 gap-5">
          <Button rightIcon={<ArrowDownIcon className="h-5 w-5" />} variant="outline" radius="sm" size="xl" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
            Load More
          </Button>
        </div>

        <p className="text-text lg:text-xl lg:leading-9 max-w-5xl mx-auto text-center">SiteRacks Blog equips you with essential knowledge and tools, ensuring your website&#39;s reliability, security, and optimization in today&#39;s competitive online landscape.</p>
      </main>
    </>
  );
};

export default BlogIndex;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "blog";

    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/seo?seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    // console.log("metaData", response);
    if (response?.data) {
      const metaData = response?.data;
      return {
        props: {
          metaData,
        },
       
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}
