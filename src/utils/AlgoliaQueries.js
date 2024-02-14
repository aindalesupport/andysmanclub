const pageQuery = `{
  stories: allStoryblokEntry(
    filter: { field_component: { in: ["news_views"] }}
  ) {
    edges {
      node {
        id
        name
        slug
        field_component
        full_slug
        content
        first_published_at
        tag_list
      }
    }
  }
  groups: allStoryblokEntry(
    filter: { field_component: { in: ["group"] }}
  ) {
    edges {
      node {
        id
        name
        slug
        field_component
        full_slug
        content
        first_published_at
        tag_list
      }
    }
  }  
}`;

function pageToAlgoliaRecord({ node: { id, content, ...rest } }) {
  let body = JSON.parse(content)

  if( body.lat && body.lng ) {
    body._geoloc = { lat: parseFloat(body.lat), lng: parseFloat(body.lng) }
    delete body.lat
    delete body.lng
  }

  return {
    objectID: id,
    ...body,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.stories.edges.map(pageToAlgoliaRecord),
    indexName: `Pages`
  },
  {
    query: pageQuery,
    transformer: ({ data }) => data.groups.edges.map(pageToAlgoliaRecord),
    indexName: `Groups`
  },  
];

module.exports = queries;