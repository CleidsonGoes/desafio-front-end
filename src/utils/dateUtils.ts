import moment from 'moment';

const formatDate = (isoDateString: string): string => {
  return moment(isoDateString).format('DD/MM/YYYY'); // Ex: '01/03/2021'
};

export default formatDate;
