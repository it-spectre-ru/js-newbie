const now = (date = new Date()) => date.getTime();

const sleep = (interval) => {
  const end = now() + interval;
  while (now() < end);
};

sleep(5000);
