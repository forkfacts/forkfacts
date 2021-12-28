# Introduction

This project is home for consumer facing website. In order to create this website, there are other different github projects
that are responsible for their own thing and generate artifacts used by this project

# Getting Started

## Pre-requisites
- You must have `yarn` installed. Run `brew install yarn` on Mac (assuming you have homebrew) to install `yarn`. For more
  options, follow [`yarn documentation`](https://yarnpkg.com/getting-started/install).
- If you want to enable search, see [how to enable search section](#enable-search-on-the-project)

## Steps

### Clone project

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

### Install Dependencies

```shell
cd forkfacts && yarn install
```

### Run the project

#### Development

- Run `yarn develop` to start gatsby project locally. It internally runs `gatsby develop` command. Your project will start 
  on http://localhost:8000
- Run `yarn storybook` to start storybook. It will run on http://localhost:6006/.
  in order to run this command).

#### Production

- Run `yarn build` to create production build.
- Run `gatsby serve` to start production build locally. It will start project on http://localhost:9000/

It helps form time-to-time to create production build and serve locally to ensure all is well!

# Design

We use Figma, and the latest design is available [here](https://www.figma.com/file/nhyeaTsg4Jhhzq2PwuvnGk/forkfacts?node-id=811%3A9433)


# Process

The entire project is managed using GitHub Projects (beta). Currently, the issues are marked with 3 priorities -
`🥑 High`, `🍉 Medium`, and `🍔 Low`. These priorities are open for discussion and should be refined as team finds it necessary.

| What                          | Where                                                          |
| ----------------------------- | -------------------------------------------------------------- |
| All issues (as list)          | [Link](https://github.com/orgs/forkfacts/projects/1/views/1) |
| Current Priorities (as board) | [Link](https://github.com/orgs/forkfacts/projects/1/views/5) |

## Steps

1. Assign yourself an **unassigned** ticket from the list of `🥑 High` priority.
2. Create a feature branch based on latest `develop` branch. We are using Semantic Release for automated releases. So, please refer to
   [commit message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) guidelines to indicate the nature of change.
   Read [Github Docs](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls)
   on how to reference issues in commits and in pull requests.
3. Early on (with your first commit push itself), create a draft pull requests to ensure builds are running and there are no merge
   conflicts. This can save a lot of time in the integration later. Also, with each PR, chromatic builds are connected to generate
   updated storybook components. This can be of tremndous help during the code review.
4. Once you are done with the work, assign your PR to a reviewer.

## Release
We are using a version of [6 weeks cycle](https://3.basecamp-help.com/article/35-the-six-week-cycle). However, we may not
always run for 6 weeks depending upon the time and bandwidth available. But we do run a cycle. We prioritize what we can
do in a cycle, and create a milestone. All our milestones are available [here](https://github.com/forkfacts/forkfacts/milestones).

We try to keep the name of milestone from the list of herbs available [here](https://www.britannica.com/topic/list-of-herbs-and-spices-2024392)


We are using [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) to release the project. The feature branches
are worked upon based on the `develop` branch. The code reviews (PRs) are opened against `develop` branch. Once a PR
is merged, it goes into the `develop` branch. 

From time to time, we open a PR from `develop` to `main` branch. Currently, we do not wait for a cycle to complete
in order to merge to `main`. We prefer to merge to `main` (hence a release) as soon as we are happy with the quality of work.

At this time, we create a new release automatically using [semantic-release](https://semantic-release.gitbook.io/semantic-release/). 
As soon as a PR is merged into the `main` branch, a [Github Action](.github/workflows/release.yml) is triggered to create a new release.

## Contribute
There are many ways to contribute.
### Spread the word!
If you think this project has given you information that could help you lead a healthy eating lifestyle, please consider
sharing it with others around you. People who trust you are more inclined to try out new things.
We hope that everyone around us has fact-based nutrition information. The decision is on the individual, but sharing the
information is a collective community effort, so please help us spread the word.

### Submit new ideas
The aim for this project is to provide value to community. We believe that best ideas come from everywhere, so we 
ask you to help us by letting us know your use cases when looking for nutrition related information.
Please use our pre-defined [template](https://github.com/forkfacts/forkfacts/issues/new/choose) to provide information.

### File an issue
If you think you've found an issue, please create an issue using a pre-defined [template](https://github.com/forkfacts/forkfacts/issues/new/choose).
Please follow the structure and give as much information as possible. This will help us triage, reproduce the issue faster.

> More methods of contributions are coming soon

## How to?
### Enable search on the project
We leverage [Algolia](https://www.algolia.com/) for search capabilities. In order to use search,
you need a few things
1. An account on Algolia
2. A search index on Algolia

A search index is a collection of structured data on which you perform your searches. This 
project creates this structured collection for you. When you run `yarn build`, it creates JSON file
under `.raw/` directory at the root project. The JSON file(s) here are the data that you need
to create search index on Algolia.
There are different ways creating search index, however, if you are getting started, an easier
way is by importing the data using [Algolia Dashboard](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-from-the-dashboard/)

Once you have finished this step, the final step is to enable search on forkfacts.
Create a file called `.env.development` in the root of the project. In this file, you need to
add 2 entries
```text
GATSBY_SEARCH_APP_ID=<your-app-id>
GATSBY_SEARCH_API_KEY=<your-search-api-key>
```
The [documentation](https://www.algolia.com/doc/guides/security/api-keys/#predefined-api-keys) outlines the 
definition of different keys that Algolia provides.
In you Algolia Dashboard, you will find these keys under your [project](https://www.algolia.com/account/api-keys)

- Replace `<your-app-id>` with value defined in **Application ID**
- Replace `<your-search-api-key>` with value defined in **Search-Only API Key**

Follow from [these steps](#install-dependencies) and you will see the search UI when your
application starts.

# Notes
1. We are using both [Chakra-UI](https://chakra-ui.com/) and [Material-UI](https://mui.com) in the project. However, the usage of Material-UI is restricted
in [FactTable](./src/components/FactTable) for its [DataGrid](https://mui.com/components/data-grid/getting-started/) component. For the rest of the project, we are leveraging Chakra-UI. In case, you are
developing a new component, please use Chakra-UI for the development. If you see the need to use Material-UI, please
consult with @deekshasharma or @hhimanshu.

# Resources
[What is `colorScheme` in Chakra-UI](https://github.com/chakra-ui/chakra-ui/discussions/2846#discussioncomment-230531)
