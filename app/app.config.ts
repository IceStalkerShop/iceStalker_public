export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: 'h-(--ui-header-height-60)'
      }
    },
    main:{
      base:'min-h-[calc(100vh-var(--ui-header-height-60))]'
    },
    navigationMenu: {
      slots: {
        link: 'text-xl',
        childLink: 'text-xl',
      },
    },



    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  }
})
