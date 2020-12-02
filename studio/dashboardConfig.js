export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc765d463996155bde5cacf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bjjdh1wh',
                  apiId: '7e472f55-21c7-457f-a03a-e376bd7d4395'
                },
                {
                  buildHookId: '5fc765d510d9256a5c69e8e3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pthps89v',
                  apiId: '97902016-4596-4988-9511-72762a15fc3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kurniad-sign/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pthps89v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
