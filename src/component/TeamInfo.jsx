const TeamInfo = (props) => {
  const { member, pic, githubIcon, linkedinIcon } = props;

  return (
    <div className='flex flex-col justify-center mx-8 px-8'>
      <p className='text-lg'>{member}</p>
      <img src={pic}></img>{' '}
      <div className='flex justify-center'>
        <a className='mr-2' href='https://github.com/dtezz'>
          <img className='w-10' src={githubIcon} />
        </a>
        <a
          className='mt-1 ml-2'
          href='https://www.linkedin.com/in/david-tezza/'
        >
          <img className='w-10' src={linkedinIcon} />
        </a>
      </div>
    </div>
  );
};

export default TeamInfo;
