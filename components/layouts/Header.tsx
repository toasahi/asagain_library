import { memo } from 'react';

export const Header = memo(() => {
  return (
    <header className="w-full sm:sticky lg:h-32">
      <nav>
        <ul className="flex justify-around w-1/2">
          <li><a href=".">TOP</a></li>
          <li><a href=".">NEWS</a></li>
          <li><a href=".">GALLERY</a></li>
        </ul>
      </nav>
    </header>
  );
});
