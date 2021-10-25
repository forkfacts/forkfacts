# Forkfacts
This project is home for consumer facing website. In order to create this website, there are other different github projects 
that are responsible for their own thing and generate artifacts used by this project

**Flow of information**
```text
forkfactsdb => forkfacts-scripts => forkfacts
```

## [forkfactsdb](https://github.com/bonsaiilabs/forkfactsdb) 
- Responsible for setting up database locally with USDA dataset (currently, our only supported dataset)
- Follow this project documentation to set up your database locally.

## [forkfacts-script](https://github.com/bonsaiilabs/forkfacts-scripts)
- Responsible for fetching the data from the database and generating data files that can be fed to the Gatsby website
- **Why we need this?**
  - We have specific requirements on what data needs to be shown on each page. Gatsby can connect to a PostgreSQL database,
    however, the query language is GraphQL, **not SQL**. GraphQL does not support writing join queries, which is our requirement.
    Hence, this project was created to generate data files that Gatsby project can ingest and create web pages.
  

## [forkfacts](https://github.com/bonsaiilabs/forkfacts)
- This repository. It is a gatsby project responsible for creating website as defined in the [Figma Design](https://www.figma.com/file/nhyeaTsg4Jhhzq2PwuvnGk/forkfacts?node-id=811%3A9433)
- While, majority data comes in form of data files (by leveraging forkfacts-scripts project), this project, however, 
  still depends on database connection. *TODO: This should be discussed to see if it should be database agnostic*