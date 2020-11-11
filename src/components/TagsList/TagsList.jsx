import React from 'react'
import './TagsList.scss'

const TagsList = ({tags}) => {
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li className="tag"
                    key={index}
                    data-tag={tag}
                >{tag}</li>
            ))}
        </ul>
    )
}

export default TagsList
