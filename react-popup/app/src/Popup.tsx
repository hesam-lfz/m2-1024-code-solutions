import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './Popup.css';

type Props = {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
  opacity?: number;
  onClose?: () => void;
  children: ReactNode;
};
export function Popup({
  isOpen,
  positionTo,
  opacity = 0,
  onClose,
  children,
}: Props) {
  if (!isOpen) return null;
  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.bottom : '50%';
  const left = r ? r.left : '50%';

  return createPortal(
    <>
      <div onClick={onClose} style={{ opacity }} className="popup-shade" />
      <div style={{ top, left, position: 'absolute' }}>{children}</div>
    </>,
    document.body
  );
}
