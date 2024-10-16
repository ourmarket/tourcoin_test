"use client";
import React, { useState } from "react";
import styles from "./SettingsModal.module.css";
import { IoHelp } from "react-icons/io5";

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2 className={styles.title}>Settings</h2>
        <div className={styles.section}>
          <label className={styles.label}>
            Slippage tolerance
            <div className={styles.tooltip}>
              <IoHelp />
              <span className={styles.tooltiptext}>
                Slippage tolerance is the percentage of price movement you are
                willing to accept.
              </span>
            </div>
          </label>
          <div className={styles.toleranceOptions}>
            <button className={styles.option}>0.1%</button>
            <button className={styles.option}>0.5%</button>
            <button className={styles.option}>1%</button>
            <input type="number" className={styles.input} placeholder="0.8" />
            <span>%</span>
          </div>
        </div>
        <div className={styles.section}>
          <label className={styles.label}>
            Transaction deadline
            <div className={styles.tooltip}>
              <IoHelp />
              <span className={styles.tooltiptext}>
                Transaction deadline is the maximum time you are willing to wait
                for the transaction to complete.
              </span>
            </div>
          </label>
          <div className={styles.deadlineInput}>
            <input type="number" className={styles.input} placeholder="20" />
            <span>Minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
