export default function index() {
  return (
    <div className="mx-auto container p-10">
      <h1 className="text-5xl text-green-100">映画一覧</h1>
      <ul className="leading-4"></ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// };
