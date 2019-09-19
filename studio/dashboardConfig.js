export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5d84032c3f1b5ec75f23ecf5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ib53ram3',
                  apiId: 'f2f7d779-9445-45c1-a04d-68a12e239995'
                },
                {
                  buildHookId: '5d84032cd88f78eaf59f0e99',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rqxgozad',
                  apiId: '7695a626-388e-49a4-9ad8-dfea3cb00203'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rqxgozad.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
