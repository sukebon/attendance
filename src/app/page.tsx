import Image from 'next/image';
import { LeftMain } from './components/LeftMain';
import { RightMain } from './components/RightMain';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <LeftMain />
      <RightMain />
    </main>
  );
}
