import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'modal',
  title: 'Card',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'giftdescription',
      title: 'giftDescription',
      type: 'string',
      description: 'Please add Gift Description',
    }),
    defineField({
      name: 'giftamount',
      title: 'giftAmount',
      type: 'string',
      description: 'Please add Gift Amount',
    }),
    defineField({
      name: 'bgimage',
      title: 'GiftBgImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'giftType',
      title: 'Gift Type',
      type: 'string',
      options: {
        list: [
          { title: 'Education', value: 'Education' },
          { title: 'Water', value: 'Water' },
          { title: 'Stability', value: 'Stability' },
          { title: 'Child Support', value: 'Child Support' },
          { title: 'TEST Dental Kits', value: 'TEST Dental Kits' },
          { title: 'Child Survival New', value: 'Child Survival New' },
          { title: 'Health New', value: 'Health New' },
          { title: 'Goats V1 New', value: 'Goats V1 New' },
          { title: 'Stability New', value: 'Stability New' },
        ],
      },
      description: 'Please select Gift Type',
    }),
  ],
  preview: {
    select: {title: 'giftdescription', media: 'bgimage'},
  },
})
