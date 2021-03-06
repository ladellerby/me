const API_URL = process.env["WORDPRESS_API_URL"]!;

async function fetchAPI(query: any, { variables }: any = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPosts(_preview: any) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            excerpt
            content(format: RENDERED)
            tags(last: 10) {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
    
      `
  );
  return data?.posts.edges;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  return data?.posts;
}

export async function getPost(slug: any) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      content(format: RENDERED)
      tags(last: 10) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
      }
    }
    `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data?.post;
}

export default fetchAPI;
