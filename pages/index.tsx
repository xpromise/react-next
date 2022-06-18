import Link from "next/link";
import { reqGetArticles, Articles } from "../lib/api/home";

import styles from "../styles/Home.module.css";

// 编译的时候执行。会请求数据并缓存下来
// 当用户访问页面时，访问速度很快
export async function getStaticProps() {
  const res = await reqGetArticles();

  return {
    props: {
      articles: res.data.data,
    },
  };
}

interface HomeProps {
  articles: Articles;
}

const Home = ({ articles }: HomeProps) => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        {articles.map((article) => {
          return (
            <Link href={`/post/${article.id}`} key={article.id}>
              <li>
                <div className={styles.metaContainer}>
                  <div>{article.author}</div>
                  <div className={styles.date}>1月前</div>
                  <div className={styles.tagList}>
                    <span>前端 </span>
                    <span>JavaScript </span>
                    <span>面试</span>
                  </div>
                </div>
                <div>我从来不理解闭包，直到我要去面试</div>
                <div>闭包 怎么答 回答这一类的面试题的时候你觉得需要用到方法论吗？如何有理有据的论述你的答案，用简</div>
                <div>1.8w 186 17</div>
              </li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
