import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Travail', 'Repos'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#4f35d6'],
      hoverBackgroundColor: ['#FF6384', '#4f35d6'],
    },
  ],
};

export default class Lol extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <strong>Répartition du temps de repos</strong>
        <Doughnut data={data} />
      </div>
    );
  }
}
