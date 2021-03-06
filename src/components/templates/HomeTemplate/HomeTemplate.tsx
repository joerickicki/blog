import Layout from 'components/modules/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

type HomeTemplateProps = {
  preview: boolean
};

export default function HomeTemplate({
  preview,
}: HomeTemplateProps): ReactElement {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Joe Rickicki</title>
        </Head>

        <div className="container mx-auto mt-20 flex flex-col justify-center items-center lg:flex-row-reverse lg:px-20 ">
          <img
            src="/IMG_4664.jpg"
            alt="Somewhat Primitive Builder"
            className="rounded-full w-24"
          />
          <div className="mt-5 text-center lg:text-left lg:mr-20">
            <p className="text-4xl">Shared Notes</p>
            <p className="text-2xl">Coding, Health, etc.</p>
            <div className="mt-6">
              <Link href="/blog">
                <a
                  aria-label="blog"
                  className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  Visit the Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
