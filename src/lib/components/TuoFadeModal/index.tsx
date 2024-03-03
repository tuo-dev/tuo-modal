/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import './index.scss';

interface ITuoFadeModal {
  className?: string;
  width?: number;
  height?: number;
  modalColor?: string;
  modalRadius?: number;
  modalPadding?: number;
  backgroundColor?: string;
  clickBackgroundClose?: boolean;
  closeBtn? : boolean;
  open:boolean;
  onClose: () => void;
}

const TuoFadeModal = ({
  className,
  width = 300,
  height = 400,
  modalColor = '#fff',
  modalRadius = 10,
  modalPadding = 10,
  backgroundColor = '#0003',
  clickBackgroundClose = true,
  closeBtn = true,
  open,
  onClose,
  children
}:PropsWithChildren<ITuoFadeModal>) => {
  
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [modalClass, setModalClass] = useState<'open' | 'stop' | 'close' | ''>('');

  const handleModalClass = () => {
    if (modalClass === 'open') setModalClass('stop');
    else if (modalClass === 'close') setModalClass('');
    else return;
  };

  useEffect(() => {
    backgroundRef.current?.addEventListener('animationend' , handleModalClass);

    return () => {
      backgroundRef.current?.removeEventListener('animationend' , handleModalClass);
    };
  }, [modalClass]);

  useEffect(() => {
    if (open) setModalClass('open');
    else if (modalClass === 'stop') setModalClass('close');
  }, [open]);

  return (
    <>
      {modalClass !== '' &&
      <div className={`tuo-fade-modal-container ${modalClass}`} >
        <div
          className={`tuo-fade-modal-content ${className && className} use-animation`}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            padding: `${modalPadding}px`,
            backgroundColor: `${modalColor}`,
            borderRadius: `${modalRadius}px`,
        }}
        >
          {closeBtn && 
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='close-btn'
              onClick={onClose}
              style={{ top: `${modalPadding}`, right: `${modalPadding}`}}
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M6.51992 16.4196C6.22703 16.7125 6.22703 17.1874 6.51992 17.4803C6.81281 17.7732 7.28769 17.7732 7.58058 17.4803L12 13.0609L16.4194 17.4803C16.7123 17.7732 17.1872 17.7732 17.4801 17.4803C17.773 17.1874 17.773 16.7125 17.4801 16.4196L13.0607 12.0002L17.4801 7.58078C17.773 7.28788 17.773 6.81301 17.4801 6.52012C17.1872 6.22722 16.7123 6.22722 16.4194 6.52012L12 10.9395L7.58058 6.52012C7.28769 6.22722 6.81282 6.22722 6.51992 6.52012C6.22703 6.81301 6.22703 7.28788 6.51992 7.58078L10.9393 12.0002L6.51992 16.4196Z" fill="#333"/>
            </svg>
          }
          {children}
        </div>
        <div
          ref={backgroundRef}
          className={`tuo-fade-modal-background ${modalClass} use-animation`}
          style={{background: backgroundColor}}
          onClick={() => { if (clickBackgroundClose && modalClass === 'stop' && onClose) onClose();}} />
      </div>
      }
    </>
  );
};

export default TuoFadeModal;