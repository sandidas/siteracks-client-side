
export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('json/navigation.json')
    const data = await res.json()
  
    return data
  }