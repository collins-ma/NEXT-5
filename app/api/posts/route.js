export async function GET() {
    try {
      // Fetch all posts from the external API (using jsonplaceholder as an example)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      // If there are no posts, return 404
      if (!posts.length) {
        return new Response('No posts found', { status: 404 });
      }
  
      return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
      return new Response('Failed to fetch posts', { status: 500 });
    }
  }
  


  export async function POST(req) {
    const body = await req.json();
  
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    const newPost = await response.json();
  
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  

  
  
  