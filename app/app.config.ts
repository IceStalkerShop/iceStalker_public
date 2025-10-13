export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: ['rounded-none']
      }
    }, header: {
      slots: {
        root: 'h-(--ui-header-height-60)'
      }
    }, main: {
      base: 'min-h-[calc(100vh-var(--ui-header-height-60))]'
    }, navigationMenu: {
      slots: {
        link: 'text-base font-normal', childLink: 'text-base font-normal',
      }, variants: {
        orientation: {
          horizontal: {
            childLinkLabel: 'font-normal'
          }
        }
      }
    },


    colors: {
      primary: 'blue', neutral: 'neutral'
    }
  }
})
