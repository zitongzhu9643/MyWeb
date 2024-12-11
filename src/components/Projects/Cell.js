import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      {(data.title || data.date) && (
        <header>
          <h3>
            {data.title && <a href={data.link}>{data.title}</a>}
          </h3>
          {data.date && (
            <time className="published">
              {dayjs(data.date).format('MMMM, YYYY')}
            </time>
          )}
        </header>
      )}
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      {data.desc && (
        <div className="description">
          <p>{data.desc}</p>
        </div>
      )}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
