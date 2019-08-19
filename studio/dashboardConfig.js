export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d5a738f94373b4d32edf7b2',
                  title: 'Sanity Studio',
                  name: 'terng-life-studio',
                  apiId: '876da078-0642-42dd-b9ed-10638671c256'
                },
                {
                  buildHookId: '5d5a738fa0665f7b68c5691f',
                  title: 'Blog Website',
                  name: 'terng-life',
                  apiId: 'c13ea6de-dbdd-4b08-877b-3f4184c53c76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spksoft/terng-life',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://terng-life.netlify.com', category: 'apps'}
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
