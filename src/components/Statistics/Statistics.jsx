import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  const renderTitle = title ? <h2 className={css.title}>{title}</h2> : null;

  return (
    <section className={css.container}>
      {renderTitle}
      <ul className={css.statList}>
        {stats.map((item, index) => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: getColorByLabel(index) }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getColorByLabel(index) {
  const colors = ['red', 'blue', 'green', 'orange', 'purple'];
  const colorIndex = index % colors.length;
  return colors[colorIndex];
}
export default Statistics;
