import React from 'react';

import style from './Card.module.scss';

type CardBodyProps = {
  children: React.ReactNode;
};

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className={style['card__body']}>{children}</div>;
};

export default CardBody;
