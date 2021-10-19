import { memo } from 'react';

export const Header = memo(() => {
  return (
    <header className="bg-white w-full sm:sticky lg:h-32">
      <nav></nav>
    </header>
  );
});
