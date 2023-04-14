import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Head from 'next/head';

type Metadata = {
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaAuthor: string;
  metaOgDescription: string;
  metaOgImage: string;
  metaOgTitle: string;
  metaOgUrl: string;
  shareTitle: string;
};

const usePageMetadata = (slug: string) => {
  const { data, isLoading } = useQuery<Metadata>(
    ['metadata', slug],
    async () => {
      const response = await fetch(`/api/metadata/${slug}`);
      return response.json();
    },
    { cacheTime: Infinity }
  );

  useEffect(() => {
    if (!isLoading && data) {
      const {
        pageTitle,
        metaDescription,
        metaKeywords,
        metaAuthor,
        metaOgDescription,
        metaOgImage,
        metaOgTitle,
        metaOgUrl,
        shareTitle,
      } = data;

      const head = document.getElementsByTagName('head')[0];
      head.querySelector('title').innerHTML = pageTitle;
      head.querySelector('meta[name="description"]').setAttribute('content', metaDescription);
      head.querySelector('meta[name="keywords"]').setAttribute('content', metaKeywords);
      head.querySelector('meta[name="author"]').setAttribute('content', metaAuthor);
      head.querySelector('meta[property="og:description"]').setAttribute('content', metaOgDescription);
      head.querySelector('meta[property="og:image"]').setAttribute('content', metaOgImage);
      head.querySelector('meta[property="og:title"]').setAttribute('content', metaOgTitle);
      head.querySelector('meta[property="og:url"]').setAttribute('content', metaOgUrl);
      head.querySelector('meta[property="og:type"]').setAttribute('content', 'website');
      head.querySelector('meta[property="og:site_name"]').setAttribute('content', shareTitle);
    }
  }, [isLoading, data]);

  return isLoading;
};

export default usePageMetadata;
