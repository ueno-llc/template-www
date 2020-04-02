import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Intro.scss';

interface IIntroProps {
  children: ReactNode;
}

export const Intro = ({ children }: IIntroProps) => (
  <Container>
    <div className={s.intro}>
      <Row>
        <div className={s.intro__col}>
          <p className={s.intro__text}>{children}</p>
        </div>
      </Row>
    </div>
  </Container>
);
