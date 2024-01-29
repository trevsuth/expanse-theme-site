import SineWaveComponent from '../../components/SineWaveComponent';

export default function Home() {
  return (
    <div className="container">
      <p>Name 1
        <SineWaveComponent />
      </p>
      <p>
      Name 2
        <SineWaveComponent />
      </p>
    </div>
  );
}
