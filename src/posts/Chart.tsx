import './Chart.scss';
import ReactApexChart from 'react-apexcharts';
import { usePostsStore } from '../helpers/post-store';

const Chart = () => {
  const { posts } = usePostsStore();
  const chartData = {
    options: {
      labels: ['Verified Users', 'Not Verified Users'],
      colors: ['#6D3DDA', '#FF5733'],
      dataLabels: {
        enabled: true
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    },
    series: [posts.filter((p) => p.is_verified).length, posts.filter((p) => !p.is_verified).length]
  };

  return (
    <div className="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="100%"
      />
    </div>
  );
};

export default Chart;
