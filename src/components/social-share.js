import React from "react"
import styles from './_social-share.module.scss'


const SocialShare = ( props ) => {
    return (
        <div className={styles.botContent}>
            <h3> Share:</h3>
            <ul>
                <li>
                    <a
                        href={
                            'https://www.facebook.com/sharer/sharer.php?u=' +
                            props.baseUrl +
                            props.pageContext
                        }
                        className="facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f fa-2x" />
                    </a>
                </li>

                <li>
                    <a
                        href={
                            'https://twitter.com/share?url=' +
                            props.baseUrl +
                            props.pageContext +
                            '&text=' +
                            props.postTitle +
                            '&via' +
                            'twitterHandle'
                        }
                        className="twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter fa-2x" />
                    </a>
                </li>

                <li>
                    <a
                        href={
                            'https://www.linkedin.com/shareArticle?url=' +
                            props.baseUrl +
                            props.pageContext
                        }
                        className="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin fa-2x" />
                    </a>
                </li>


            </ul>

        </div>
    )
}
export default SocialShare