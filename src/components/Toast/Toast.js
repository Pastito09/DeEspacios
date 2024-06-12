'use client';

import React from 'react';
import { CheckCircle, X } from 'react-feather';

import styles from './Toast.module.css';

function Toast({ onClick }) {
  const Icon = CheckCircle; //ICONS_BY_VARIANT[variant];

  return (
    <div className={styles.wrapper}>
      <div className={styles.toastWrapper}>
        <div className={`${styles.toast} ${styles.success}`}>
          <div className={styles.iconContainer}>
            <Icon size={24} />
          </div>
          <p className={styles.content}>
            Mensaje enviado correctamente!
          </p>
          <button
            onClick={() => onClick(false)}
            className={styles.closeButton}
            aria-label='Dismiss message'
            aria-live='off'
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
