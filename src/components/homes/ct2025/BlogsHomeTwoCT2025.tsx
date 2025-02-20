"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const fetchBlogPosts = async (cat) => {
  try {
    const res = await fetch(
      `https://a-sports.tv/api/jsonify.php/?count=4&cat=${cat}&post_type=post&tax=post_tag&page=1`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return null; // Return null to prevent breaking the component
  }
};

const BlogsHomeTwoCT2025 = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchBlogPosts(cat);
      if (data?.specific_post) {
        setPosts(data.specific_post);
      }
      setLoading(false);
    };
    getPosts();
  }, [cat]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="news-section fix section-padding p-4">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp">Latest News</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              CHAMPIONS TROPHY 2025
            </h2>
          </div>
          <div className="news-btn d-none d-md-block wow fadeInUp" data-wow-delay=".3s">
            <Link href="https://a-sports.tv/tag/champions-trophy-2025/" className="theme-btn red-btn" target="_blank" rel="noopener noreferrer">
              View All News
            </Link>
          </div>
        </div>
        <div className="row">
          {posts.length > 0 ? (
            posts.slice(0, 3).map((post, index) => (
              <div
                key={index} // Fixed missing key in .map()
                className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <div className="news-box-items">
                  <div className="news-image">
                    
                    <Link href={post.permalink} target="_blank" rel="noopener noreferrer"><img src={post.image} alt={post.title} /> </Link>
                  </div>
                  <div className="news-content">
                    <span>{post.date}</span>
                    <h3>
                      <Link href={post.permalink} target="_blank" rel="noopener noreferrer">{post.title} </Link>
                    </h3>
                    <Link href={post.permalink} className="link-btn" target="_blank" rel="noopener noreferrer">
                      Read More <i className="far fa-chevron-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsHomeTwoCT2025;
