import styled from "styled-components";
import Link from "next/link";
import Footer from '../components/Footer'
const SubTitle = styled.h2`
  background-color: var(--primary);
  color:white;
  display:inline-block;
  padding:5px;
`

export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <Link href="/sobre">
          <a>
            <h1>Jpbrab0's Blog</h1>
          </a>
        </Link>
      </header>

      <section className="postsContainer">
        <SubTitle>Posts</SubTitle>
        <article className="postsContainer__post">
          <a href="https://youtu.be/Ij-B0Yiizyw" target="_blank">
            AluraJs
          </a>
          <p>Um vídeo do Código Fonte Tv em parceria da Alura!</p>
        </article>
      </section>
      <section className="postsContainer">
        <SubTitle>Repositórios Favoritos</SubTitle>
        {props.repos.map((project) => {
          return (
            <article className="postsContainer__post" key={project.repo}>
              <a href={`https://github.com/jpbrab0/${project.repo}`} target="_blank">
                {project.repo}
              </a>
              <p>{project.description}</p>
            </article>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const githubResponse = await fetch(
    "https://api.github.com/users/jpbrab0"
  ).then((res) => res.json());
  const repos = await fetch(
    "https://gh-pinned-repos.now.sh/?username=jpbrab0"
  ).then((res) => res.json());
  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos,
    },
  };
}
