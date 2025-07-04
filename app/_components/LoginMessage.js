function LoginMessage() {
  return (
    <div className='grid bg-zinc-800 '>
      <p className='text-center text-xl py-12 self-center'>
        Please{' '}
        <a href='/login' className='underline text-yellow-500'>
          login
        </a>{' '}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
