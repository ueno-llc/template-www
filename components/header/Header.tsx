import React from 'react';
import { Link } from 'components/link';
import Logo from 'assets/svg/logo.svg';
import s from './Header.scss';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

export class Header extends React.PureComponent<IProps> {

  render() {
    return (
      <header className={s.header}>
        <div className={s.header__container}>
          <div className={s.header__content}>
            <Link to="/" className={s.header__logo}>
              <a><Logo className={s.header__logoSvg} /></a>
            </Link>

            <div className={s.header__navigation}>
              {this.props.children}
            </div>
          </div>
        </div>
      </header>
    );
  }
}