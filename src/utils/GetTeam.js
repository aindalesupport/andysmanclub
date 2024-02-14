import { graphql, useStaticQuery } from 'gatsby';

const GetTeam = () => {
   
    const data = useStaticQuery(graphql`
      {
        posts: allStoryblokEntry(
          filter: {field_component: {eq: "team_member"}}
          sort: {fields: position, order: ASC}
        ) {
          edges {
            node {
              uuid
              name
              full_slug
              content
            }
          }
        }
      }
    `)

    let filteredPosts = data.posts.edges

    filteredPosts = filteredPosts.map((p, i) => {
        const content = p.node.content
        const newContent = typeof content === 'string' ? JSON.parse(content) : content
        p.node.content = newContent
        return p.node
    })

    return filteredPosts

}

export default GetTeam