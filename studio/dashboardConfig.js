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
                  buildHookId: '5d8a4c8f316ac402348d79ca',
                  title: 'Sanity Studio',
                  name: 'colin-blog-studio',
                  apiId: '3aafddd7-2c09-4925-ba92-a39b47bb47bb'
                },
                {
                  buildHookId: '5d8a4c8f834b73450de084ea',
                  title: 'Blog Website',
                  name: 'colin-blog',
                  apiId: 'ff523c3a-172f-44c5-9aa4-80b48256867c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cpreid2/colin-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://colin-blog.netlify.com', category: 'apps'}
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
