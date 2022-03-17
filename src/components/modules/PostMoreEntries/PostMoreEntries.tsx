import PostPreview from 'components/modules/PostPreview/PostPreview';
import { ReactElement } from 'react';
import { PostParsed } from 'services/contentful/post/postParser';

type PostMoreEntriesProps = {
  posts: PostParsed[]
};

export default function PostMoreEntries({
  posts,
}: PostMoreEntriesProps): ReactElement {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
