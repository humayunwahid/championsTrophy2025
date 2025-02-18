

import Link from 'next/link';
import React from 'react';

async function fetchBlogPosts() {
    const res = await fetch('https://a-sports.tv/api/jsonify.php/?count=4&cat=champions-trophy-2025&post_type=post&tax=post_tag&page=1');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const BlogsHomeTwoCT2025 = async () => {

    let posts = [];

    try {
        posts = await fetchBlogPosts();
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
  return (
    <>

{posts ?
      <section className="news-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">
                            Latest News 
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">CHAMPIONS TROPHY 2025</h2>
                    </div>
                    <div className="news-btn d-none d-md-block wow fadeInUp" data-wow-delay=".3s">
                        <Link href="https://a-sports.tv/tag/champions-trophy-2025/" className="theme-btn red-btn">
                            View All News
                        </Link>
                    </div>
                </div>
                <div className="row">

                {posts.specific_post?.slice(0, 3).map((post, index) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src={post.image} alt={post.title} />
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="news-content">
                                <span>{post.date}</span>
                                <h3>
                                    <Link href={post.permalink}>
                                    {post.title}
                                    </Link>
                                </h3>
                                <Link href={post.permalink} className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                ))}

                </div>
            </div>
        </section>
        : 
        <p>Loading</p>
    }
    </>
  );
};

export default BlogsHomeTwoCT2025;