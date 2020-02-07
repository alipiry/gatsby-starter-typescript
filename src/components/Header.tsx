import React from 'react';
import { Link } from 'gatsby';

interface Props {
  siteTitle?: string;
}

export function Header({ siteTitle }: Props) {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  siteTitle: ``,
};
