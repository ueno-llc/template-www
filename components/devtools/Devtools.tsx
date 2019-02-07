import * as React from 'react';

import { useKeyDown } from 'hooks/use-keydown';

import { GridOverlay } from './GridOverlay';
import { GsapTools } from './GsapTools';

const LOCAL_STORAGE_KEY_VISIBLE = '_uenoDevtoolsVisible';

export const Devtools = () => {
  const [visible, setVisible] = React.useState(localStorage.getItem(LOCAL_STORAGE_KEY_VISIBLE) === 'true');
  const keys = useKeyDown();

  const onToggleDisplay = () => {
    setVisible(!visible);
    localStorage.setItem(LOCAL_STORAGE_KEY_VISIBLE, String(!visible));
  };

  React.useEffect(() => {
    if (keys.includes(17) && keys.includes(75)) {
      onToggleDisplay();
    }
  }, [keys]);

  if (!visible && process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      <GridOverlay button={visible} columns={12} />
      <GsapTools button={visible} />
    </>
  );
};
