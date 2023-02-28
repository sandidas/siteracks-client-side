const hostLink = process.env.API_HOST;
export async function loadMegaMenuItems() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${hostLink}/json/navigation.json`);
  const data = await res.json();

  return data;
}
