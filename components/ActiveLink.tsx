import { CSSProperties, FC } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}
const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
