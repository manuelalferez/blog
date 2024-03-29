import Layout from "../../components/Layout";
import { client } from "../../config/prismic-configuration";
import Prismic from "prismic-javascript";
import PostRender from "../../components/PostRender";

const Newsletter = ({ content, title, date }) => {
  return (
    <Layout>
      <PostRender
        content={content}
        title={title}
        date={date}
        backPath="/newsletter"
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "newsletter")
  );
  const pathNames = posts.results.map((post) => {
    return {
      params: {
        id: post.slugs[0],
      },
    };
  });

  return {
    paths: [...pathNames],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "newsletter")
  );

  const currentPost = posts.results.filter(
    (post) => post.slugs[0] == context.params?.id
  )[0];
  return {
    props: {
      content: currentPost.data.content,
      title: currentPost.data.title,
      date: currentPost.data.date,
    },
  };
};

export default Newsletter;
