// GET all posts or create a new post (POST)
export async function GET(req, { params }) {
    try {
      const { id } = params;
      if (!id) {
        return new Response('Post ID is required', { status: 400 });
      }
  
      // Fetch the single post by ID from the external API
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await response.json();
  
      if (!post) {
        return new Response('Post not found', { status: 404 });
      }
  
      return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
      return new Response('Failed to fetch post', { status: 500 });
    }
  }
  


  export async function PUT(req, { params }) {
    const { id } = params;
    const body = await req.json();
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    const updatedPost = await response.json();
  
    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  export async function DELETE(req, { params }) {
    const { id } = params;
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      return new Response(null, { status: 204 });
    } else {
      return new Response('Failed to delete the post', { status: 500 });
    }
  }
  