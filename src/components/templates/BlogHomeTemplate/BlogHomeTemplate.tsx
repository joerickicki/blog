import Layout from 'components/modules/Layout/Layout';
import PostHero from 'components/modules/PostHero/PostHero';
import PostMoreEntries from 'components/modules/PostMoreEntries/PostMoreEntries';
import Head from 'next/head';
import { ReactElement } from 'react';
import { PostParsed } from 'services/contentful/post/postParser';

type BlogHomePageProps = {
  preview: boolean
  allPosts: PostParsed[]
};

export default function BlogHomePage({
  preview,
  allPosts,
}: BlogHomePageProps): ReactElement {
  const [postHero, ...postMoreEntries] = allPosts;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | Joe Rickicki</title>
        </Head>
        {postHero && <PostHero post={postHero} />}
        {postMoreEntries.length > 0 && (
          <PostMoreEntries posts={postMoreEntries} />
        )}
      </Layout>
    </>
  );
}
