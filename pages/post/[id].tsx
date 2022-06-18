import React from "react";
import { reqGetArticles, reqGetArticleDetail, Article } from "../../lib/api/home";
import Image from "next/image";

export async function getStaticPaths() {
  // const res = await reqGetArticles();

  // const paths = res.data.data.map((post) => ({
  //   params: { id: post.id },
  // }));

  return {
    // paths, // 指定某些页面预渲染
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const res = await reqGetArticleDetail(params.id);

  return {
    props: {
      articleDetail: res.data.data,
    },
  };
}

function Detail({ articleDetail }: { articleDetail: Article }) {
  console.log(articleDetail);

  if (!articleDetail) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <ul>
        <li> {articleDetail.author}</li>
        <li>
          <img src={articleDetail.avatar} alt="" />
        </li>
        <li> {articleDetail.title}</li>
        <li> {articleDetail.content}</li>
      </ul>
    </div>
  );
}

export default Detail;
