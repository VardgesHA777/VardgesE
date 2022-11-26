import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { TVersionModalProps } from '../types';
import ModalDialog from '../../../components/Base/ModalDialog';
import ButtonsGroup from './ButtonsGroup';
import { VersionIcon } from '../../../components/Base/Icons/Icons';

const VersionModal = forwardRef(({ onUpdate }: TVersionModalProps, ref) => {
  const [open, setOpen] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useImperativeHandle(ref, () => ({
    open: (worker: ServiceWorker) => {
      setOpen(true);
      setWaitingWorker(worker);
    },
  }));

  const handleUpdate = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
    onUpdate();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalDialog open={open} handleClose={() => setOpen(false)}>
      <VersionIcon />
      <h4>App update</h4>
      <span>New version available</span>
      <ButtonsGroup handleUpdate={handleUpdate} handleClose={handleClose} />
    </ModalDialog>
  );
});

export default VersionModal;
