import { graphql, useStaticQuery } from 'gatsby';

const GetAny = ( items, autoPullItems = false, limitItems = false, excludePost = false ) => {

    let filteredPosts = [];
    const isResolved = typeof items[0] !== 'string'
    // Ensure this works when it has only one item selected too. Previously it didn't
    const newItems = typeof items === 'string' ? items.split(',') : items
    items = newItems
  
    let data = useStaticQuery(graphql`
        {
        posts: allStoryblokEntry(
            filter: {field_component: {ne: "settings"}}
            sort: {fields: first_published_at, order: DESC}
        ) {
            edges {
            node {
                uuid
                name
                full_slug
                content
                field_component
                tag_list
            }
            }
        }
        }
    `)

    // If none are selected in storyblok it will grab all
    if(!isResolved || items.length === 0) {
        if(items.length > 0) {
            // This will also sort the items as they are in storyblok
            filteredPosts = items.map((selected_uuid) => data.posts.edges.find((post) => post.node.uuid === selected_uuid)).filter(n=>n!==undefined);
        } else {
            // If there is a post type selected then filter by that post type. If not, return nothing
            filteredPosts = autoPullItems ? data.posts.edges.filter((post) => post.node.field_component === autoPullItems) : []
            // Exclude the current post if there is one passed in
            filteredPosts = excludePost ? filteredPosts.filter((post) => post.node.uuid !== excludePost) : filteredPosts
            // If a max limit is set, limit to that number
            filteredPosts = limitItems ? filteredPosts.slice(0, limitItems) : filteredPosts
        }

        filteredPosts = filteredPosts.map((p, i) => {
            const content = p.node.content
            const newContent = typeof content === 'string' ? JSON.parse(content) : content
            p.node.content = newContent
            return p.node
        })
    }
     
    return items = isResolved && items.length !== 0 ? items : filteredPosts
}

export default GetAny