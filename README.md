# Forkfacts
## Introduction
This project is home for consumer facing website. In order to create this website, there are other different github projects 
that are responsible for their own thing and generate artifacts used by this project

**Flow of information**
```text
forkfactsdb => forkfacts-scripts => forkfacts
```

## [forkfactsdb](https://github.com/bonsaiilabs/forkfactsdb) 
- Responsible for setting up database locally with USDA dataset (currently, our only supported dataset)

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

## Getting Started
### Pre-requisites
- You must have `yarn` installed. Run `brew install yarn` on Mac (assuming you have homebrew) to install `yarn`. For more
  options, follow [`yarn documentation`](https://yarnpkg.com/getting-started/install).
- You must have database running locally with dataset. Follow [forkfactsdb](https://github.com/bonsaiilabs/forkfactsdb)
  for setup instructions.
- **Only if you are creating new data files**. You must have forkfacts-script project installed to create scripts in 
  order to generate new data files. Follow the [forkfacts-script](https://github.com/bonsaiilabs/forkfacts-scripts) for 
  setup instructions. 
### Steps
#### Clone project
```shell
git clone git@github.com:bonsaiilabs/forkfacts.git
```
**Note - Using multiple Github SSH Keys locally?**  
Before you run `git clone` command, please do not forget the following
- Update the github domain in your `git clone command`. For example, based on your `~/.ssh/config`, your clone command may be  
`git clone git@github.com-p:bonsaiilabs/forkfacts.git`
- Ensure that your SSH keys are available to your SSH Agent running locally
  - Run `ssh-add -l` to see if keys are listed in the output. If not, follow the next step.
  - Run `ssh-add ~/.ssh/<path_of_your_ssh_private_key>` to add the keys for your SSH Agent.
  - Run `ssh-add -l` to see ensure your SSH keys are available to your SSH Agent.

#### Install Dependencies
```shell
cd forkfacts && yarn install
```

#### Run the project
##### Development
- Run `yarn develop` to start gatsby project locally. This internally runs `gatsby develop` command. This will start project
 on http://localhost:8000
##### Production
- Run `yarn build` to create production build.
- Run `gatsby serve` to start production build locally. It will start project on http://localhost:9000/ 

It helps form time-to-time to create production build and serve locally to ensure all is well!