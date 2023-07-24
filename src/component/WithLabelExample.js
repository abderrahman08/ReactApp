import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const now = 50;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;