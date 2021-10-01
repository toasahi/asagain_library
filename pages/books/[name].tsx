import { useRouter } from 'next/dist/client/router';

export default function Name() {
  const router = useRouter();
  return <h1>{router.query.name}のページです</h1>;
}