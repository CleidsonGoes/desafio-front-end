import moment from 'moment';

const formatDate = (isoDateString: string): string => {
  return moment(isoDateString).format('MMMM D, YYYY'); // Ex: 'March 1, 2021'
};

export default formatDate;
