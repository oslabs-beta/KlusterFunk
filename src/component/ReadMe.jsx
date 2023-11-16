import demo from '@/assets/demo.gif';

const ReadMe = () => {
  return (
    <div>
      <p className='text-black text-xl'>
        KlusterFunk is a monitoring tool, built to visualize metrics from local
        kafka clusters, showing you a real-time, live-updating graph of those
        metrics.
      </p>
      <section>
        <div id='features' className='text-black text-2xl font-bold'>
          Features:
          <ul className='text-lg text-black list-disc'>
            <li>Sign in/sign up for individual user accounts</li>
            <li>Visualizes Metrics pulled from user’s Prometheus</li>
            <li>Interactive, live-updating graphs of data points</li>
            <li>Reset button to refresh graphs</li>
            <li>Easy to use interface and simple display</li>
            <li>Funky, groovy color scheme</li>
          </ul>
          <img src={demo} />
        </div>
      </section>
    </div>
  );
};

export default ReadMe;
