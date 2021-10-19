import { GetStaticProps } from "next";

export default function index({posts}) {
  console.log(posts)
  return (
    <div className="mx-auto container p-10">
      <h1 className="text-5xl text-green-100">本一覧</h1>
      <ul className="leading-4"></ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/hello`);
//   const posts = await res.json();
//   return { props: { posts } };
// }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/book`);
  const posts = await res.json();
  return { props: { posts } };
};
