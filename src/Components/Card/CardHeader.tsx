import React from 'react';

import style from './Card.module.scss';

type CardHeaderProps = {
  children: React.ReactNode;
};

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={style['card__header']}>{children}</div>;
};

export default CardHeader;
