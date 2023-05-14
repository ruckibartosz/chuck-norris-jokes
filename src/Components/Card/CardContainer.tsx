import React from 'react';

import style from './Card.module.scss';

type CardContainerProps = {
  children: React.ReactNode;
};

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <div className={style['card__container']}>{children}</div>;
};

export default CardContainer;
