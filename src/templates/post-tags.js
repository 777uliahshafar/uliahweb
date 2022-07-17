import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { slugify } from '../util/utilityFunction'
import { Link } from 'gatsby'


const tagsPost = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;
    return (
        <Layout>
            <Title text='All Tags' />

            <ul>
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>&nbsp; 
                        {tagPostCounts[tag]}
                    </li>
                ))}
            </ul>


        </Layout>

    )

}

export default tagsPost