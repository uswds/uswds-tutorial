# USWDS Sandbox
A Jekyll site for rapid web prototyping and testing new work with USWDS. This site is designed to run locally and on [Federalist](https://federalist.18f.gov).

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
