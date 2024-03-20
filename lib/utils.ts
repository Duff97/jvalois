import { format } from 'date-fns'
import { fr } from 'date-fns/locale';
import {getImageDimensions} from '@sanity/asset-utils'

const MAX_SIZE = 300

export const formatDate = (date: Date) => {
  return format(date, 'd MMMM yyyy', { locale: fr });
}