import Navigation from 'components/elements/Navigation/Navigation';
import Container from 'components/foundations/PageContainer/PageContainer';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Lorenzo GM
          </h3>
          <Navigation />
        </div>
      </Container>
    </footer>
  );
}
