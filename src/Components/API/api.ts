// import { useState, useEffect } from 'react';
// import axios, { AxiosResponse } from 'axios';

// interface Page {
//   _id: string;
//   pageSlug: string;
// }

// const usePage = (slug: string): [Page | null, () => Promise<void>] => {
//   const [page, setPage] = useState<Page | null>(null);

//   const fetchPage = async () => {
//     const response: AxiosResponse<Page[]> = await axios.get('http://localhost:3000/json/seo.json');
//     const pages = response.data;
//     const page = pages.find(p => p.pageSlug === slug) || null;
//     setPage(page);
//   };

//   useEffect(() => {
//     fetchPage();
//   }, [slug]);

//   return [page, fetchPage];
// };

// export default usePage;
