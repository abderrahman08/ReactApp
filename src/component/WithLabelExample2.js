import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample2() {
  const now = 100;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample2;