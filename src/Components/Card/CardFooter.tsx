import React from 'react';

import style from './Card.module.scss';

type CardFooterProps = {
  children: React.ReactNode;
};

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className={style['card__footer']}>{children}</div>;
};

export default CardFooter;
