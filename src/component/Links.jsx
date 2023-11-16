const Links = (props) => {
  const { logo, text, link } = props;
  return (
    <section>
      {text}
      <a className='flex flex-col items-center pt-2' href={link}>
        <img className='w-1/12' src={logo} />
      </a>
    </section>
  );
};

export default Links;
