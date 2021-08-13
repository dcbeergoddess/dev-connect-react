const Spinner = () => (
  <div className='py-3 text-center'>
    <i
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
      className='fas fa-cog fa-spin fa-2x'
    />
  </div>
);

export default Spinner;
