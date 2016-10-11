import React from 'react';
import { browserHistory } from 'react-router';

import './Intro.css';

const Intro = () => (
  <div className="Intro">
    <p>
      Nisi et occaecat nostrud commodo esse sit cupidatat mollit dolor nisi non magna labore sit. Quis voluptate labore labore est elit et nulla quis aute. Est cupidatat aute in reprehenderit reprehenderit anim exercitation dolor laborum qui voluptate nostrud culpa aliqua. Deserunt cupidatat sunt reprehenderit pariatur anim id.
    </p>
    <div className="Intro-Control">
      <button onClick={() => browserHistory.push('/countries')}>Browse Countries</button>
    </div>
  </div>
);

export default Intro;
