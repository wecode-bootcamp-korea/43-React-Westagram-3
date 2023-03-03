import React from 'react';
import { useNavigate } from 'react-router-dom/dist';
import './Team.scss';

const Team = () => {
  const navigate = useNavigate();
  return (
    <div className="team">
      <h1>3팀 위스타그램 페이지</h1>
      <div className="routeMovementButton">
        <button onClick={() => navigate('/jisu-Login')}>오지수</button>
        <button onClick={() => navigate('/sumi-Login')}>김수미</button>
        <button onClick={() => navigate('/jeoungho-Login')}>신정호</button>
        <button onClick={() => navigate('/jeongin-Login')}>유정인</button>
      </div>
      <button />
    </div>
  );
};

export default Team;
