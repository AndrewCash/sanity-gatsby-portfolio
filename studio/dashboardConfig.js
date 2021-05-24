export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60ab69523681b90ddf88e576',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ni843onj',
                  apiId: 'ec445aa3-4f47-43a7-b0b6-5c9cf091686a'
                },
                {
                  buildHookId: '60ab695281eda920507cc973',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6444pb1h',
                  apiId: 'f52bde67-3064-492e-883b-9536c3d8b00a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndrewCash/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6444pb1h.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
