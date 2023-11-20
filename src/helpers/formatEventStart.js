import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatEventStart = startTime => {
  return format(Date.parse(startTime), 'dd MMMM yyyy, HH:mm', { locale: uk });
};
