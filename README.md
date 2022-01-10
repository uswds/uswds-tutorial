:warning: **In progress.** This repo is a work in progress. We'll be lauching it January 20, 2022.

# USWDS Tutorial
A tutorial project to learn about installing, compiling, and customizing with USWDS.

## Requirements
- Node v16
- Ruby v3.0.2

## Running code locally
After cloning the template repo, install USWDS, Jekyll, and any necessary dependencies using:
```
npm run init
```
Then, to serve the site locally:
```
npm start
```
If all goes well, visit the site at http://localhost:4000.

USWDS assets are in `assets/fonts` and `assets/img`.

SASS files are kept in the `/_sass` directory. Running `npm start` will also watch these files and recompile when there are changes.

## Templates
- `default`: A blank-slate sandbox page
- `basic-prose`: A page with a banner, basic header, footer, identifier, and a prose container 
- `extended-prose`: A page with a banner, extended header, footer, identifier, and a prose container 
