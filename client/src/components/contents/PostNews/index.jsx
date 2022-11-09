import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../assets/img'
import Grid from '../Gird'
import "./styles.scss"

const PostNews = () => {
    return (
        <div className="c-postnews">
            <Grid column={2} mr={40} mrPcS={20}>
                <div className="c-box01">
                    <figure>
                        <img
                            src={images.news.img_news01}
                            alt="Established fact that by the readable content"
                        />
                    </figure>
                    <div className="c-box01__content">
                        <h3 className="ttl">
                            Established fact that by the <br />
                            readable content
                        </h3>
                        <Link to="/" className="c-btn01">
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="c-box01">
                    <figure>
                        <img
                            src={images.news.img_news02}
                            alt="Established fact that by the readable content"
                        />
                    </figure>
                    <div className="c-box01__content">
                        <h3 className="ttl">
                            Established fact that by the <br />
                            readable content
                        </h3>
                        <Link to="/" className="c-btn01">
                            Read More
                        </Link>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default PostNews