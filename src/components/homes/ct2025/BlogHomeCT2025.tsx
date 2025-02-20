

import Link from 'next/link';
import React from 'react';

// Define an async function to fetch data
async function fetchBlogPosts() {
    const res = await fetch('https://a-sports.tv/api/jsonify.php/?count=4&cat=champions-trophy-2025&post_type=post&tax=post_tag');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const BlogHomeCT2025 = async () => {
    let posts = [];

    try {
        posts = await fetchBlogPosts();
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }

    return (
        <>
            <section className="news-section fix section-padding pt-0 ">
                <div className="container">
                    {/* <div className="section-title color-red text-center">
                    <h6 className="wow fadeInUp">
                        News & Blog
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Latest News & Blog
                    </h2>
                </div> */}

                    {posts ?

                        <div className="row">
                            <div className="col-lg-6" data-wow-delay=".3s">
                                <div className="news-left-items">
                                    <div className="news-thumb">
                                        <Link  href={posts.specific_post[0].permalink} target="_blank" rel="noopener noreferrer">
                                            <img src={posts.specific_post[0].image} alt={posts.specific_post[0].title} />
                                        </Link>
                                        <Link  href={posts.specific_post[0].permalink} className="post-box" target="_blank" rel="noopener noreferrer">
                                            <i className="fal fa-calendar-alt"></i> {posts.specific_post[0].date}
                                        </Link>
                                    </div>
                                    <div className="news-content">

                                        <h3>
                                            <Link  href={posts.specific_post[0].permalink} target="_blank" rel="noopener noreferrer">{posts.specific_post[0].title}</Link>
                                        </h3>
                                        <ul className="post-cat">
                                            <li>
                                                {posts.specific_post[0].excerpt}

                                            </li>

                                        </ul>
                                        <Link  href={posts.specific_post[0].permalink} className="link-btn" target="_blank" rel="noopener noreferrer">Read More <i className="far fa-chevron-double-right" ></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="news-right-items">
                                    {posts.specific_post?.slice(1, 4).map((post, index) => (
                                        <div className="news-right-box" data-wow-delay=".3s" key={index}>
                                            <div className="thumb">
                                            <Link href={post.permalink} target="_blank" rel="noopener noreferrer"><img src={post.image} alt={post.title}   /></Link>
                                                <Link href={post.permalink} className="post-box" target="_blank" rel="noopener noreferrer">
                                                    {post.date}
                                                </Link>
                                            </div>
                                            <div className="content">
                                                {/* <ul className="post-cat">
                                                    <li>
                                                        <i className="fal fa-user"></i>
                                                        {post.author || 'Unknown'}
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-calendar-alt"></i>
                                                        {new Date(post.date).toLocaleDateString()}
                                                    </li>
                                                </ul> */}
                                                <h5>
                                                    <Link href={post.permalink} target="_blank" rel="noopener noreferrer">{post.title} </Link>
                                                </h5>
                                                <Link href={post.permalink} className="link-btn" target="_blank" rel="noopener noreferrer">
                                                    Read More <i className="far fa-chevron-double-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        :

                        <p>Loading</p>
                    }

                </div>
            </section>
        </>
    );
};

export default BlogHomeCT2025;