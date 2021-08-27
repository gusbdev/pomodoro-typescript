import React from 'react';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{props.mainTime}</div>;
}
