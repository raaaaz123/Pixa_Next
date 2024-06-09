export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Avatar',
      route: '/events/create',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    prompt: '',
    nprompt: '',
    gender: '',
    url1: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }