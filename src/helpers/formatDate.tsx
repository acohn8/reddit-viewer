import * as moment from 'moment';

export const formatDate = (UtcDate: number) => {
  const date: Date = new Date(UtcDate * 1000);
  return moment(date).from(Date.now());
};
