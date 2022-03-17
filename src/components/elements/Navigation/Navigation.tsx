import Link from 'next/link';
import { ReactElement } from 'react';

export default function Navigation(): ReactElement {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <a href="https://github.com/joerickicki">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joe-rickicki-242461216/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
}
