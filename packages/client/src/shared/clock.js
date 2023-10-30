const Clock = () => {
  const time = new Date();

  const date = time.toLocaleDateString();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return `${date} ${hours}:${minutes}`;
};

export default Clock;
