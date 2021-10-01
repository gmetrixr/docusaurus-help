# docusaurus-help

[![Build Status](https://drone-xr.gmetri.io/api/badges/gmetrixr/help/status.svg)](https://drone-xr.gmetri.io/gmetrixr/help)

## After Checking out project

```bash
./sd #To get inside docker container, everything below is in the container
cd gmetri-help
p i
p start #to start watch mode
p build #to build website
#To Deploy:
export GIT_USER=<your github user>
p deploy
```

Docusaurus's preset-class plugin exposes three types of pages:

1. Pages: in `/src/pages/___` -> URL: `localhost:3000/___`
2. Docs: in `/docs/___` -> URL: `localhost:3000/docs/___` (Contains sidebar by default)
3. Blog: in `/blog/___` -> URL: `localhost:3000/blog/___` (Contains sidebar by default)

For GMetri, we want the following structure:

1. Help Center - Help home, starting point. Contains summary of all help related links.
   * URL: www.gmetri.com/help
   * Content: `help/gmetri-help/src/docs/___` (Using Docusaurus docs, not blog - because we need a sidebar)
   * In case we need changelogs in the website, it can be a sub-blog at
      * Content: www.gmetri.com/help/changelog
      * Content: `help/gmetri-help/blog/___`

2. Docs (Features/Reference)
   * URL: www.gmetri.com/docs
   * Content: `docs/gmetri-docs/src/docs/___`

3. XR Academy - Journeys, user focused. Catgorized by user's knowledge, industry.
   * URL: www.gmetri.com/xracademy
   * Content: `xracademy/gmetrixr-xracademy/src/docs/___`

4. API Docs
   * URL: www.gmetri.com/api
   * Content: ReDocs/RapiDoc based website

Links on Headers of all help websites: 

1. Help Center (www.gmetri.com/help)
2. XR Academy (www.gmetri.com/xracademy)
3. Documentation (www.gmetri.com/docs)
4. API (www.gmetri.com/api) [Later, once live]

## Notes

* Use pnpm, not yarn.
* Runs well on linux, not tested on Mac/Windows.
* To Start using the repo, check out the code locally, and type `sd` (Start Docker). This starts a docker container and places you inside it.
> Note: you can start multiple terminals and type `sd`. You will get connected to the same container.
* Run everything beyond this point inside the docker container.
* To stop the container: Exit the docker container using `Ctrl+d`, and then `std` (STop Docker)

## One Time Initial Docusaurus Setup

> https://docusaurus.io/docs/next/installation#scaffold-project-website

```
sd
npx @docusaurus/init@latest init gmetri-help classic
cd gmetri-help
rm -rf yarn.lock node_modules
p i
```

* Add following to start script in `help/package.json`: `docusaurus start -p 8001 -h 0.0.0.0`
