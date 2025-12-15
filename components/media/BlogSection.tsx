import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: {
    src: string;
    width: number;
    height: number;
    srcSet?: string;
  };
  href: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <div className="framer-1i3nsgi">
      <div className="framer-xb97td">
        <h2 className="framer-text text-center text-white text-5xl font-medium leading-tight tracking-tight">
          Our Blog
        </h2>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.href}
            className="framer-4tp28x block group"
          >
            <div className="framer-rr61xn relative rounded-lg overflow-hidden border border-gray-200">
              <div className="relative w-full h-33">
                <img
                  src={post.image.src}
                  alt={post.title}
                  width={post.image.width}
                  height={post.image.height}
                  srcSet={post.image.srcSet}
                  className="w-full h-full object-cover"
                  decoding="auto"
                />
              </div>
              <div className="framer-1h6ihfo absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="framer-text text-white text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-2">
                  {post.title}
                </h3>
                <p className="framer-text text-gray-300 text-sm">{post.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
