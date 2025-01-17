import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  // Calcul culori bazat pe procentul de feedback pozitiv
  let bgColor;
  if (positivePercentage >= 50) {
    // Interpolare între galben și verde pe măsură ce procentajul crește de la 50% la 100%
    const greenIntensity = (positivePercentage - 50) / 50;
    bgColor = `rgba(${255 * (1 - greenIntensity)}, 255, 0, 1)`;
  } else {
    // Interpolare între roșu și galben pe măsură ce procentajul creste de la 0% la 50%
    const yellowIntensity = positivePercentage / 50;
    bgColor = `rgba(255, ${255 * yellowIntensity}, 0, 1)`;
  }

  return (
    <div className={styles.statistics} style={{ backgroundColor: bgColor }}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
