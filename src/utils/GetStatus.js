const GetStatus = (status) => {
  switch (status) {
    case 'Alive':
      status = '🟢';
      break;
    case 'Dead':
      status = '🔴';
      break;
    case 'unknown':
      status = '🟡';
      break;

    default:
      status = '🟡';
      break;
  }
  return status;
};

export default GetStatus;
