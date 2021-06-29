# Biocorrector Website

This is a website about biocorrectors. It was developed using next js technology. 

## Getting Started

First of all, take all the files, open a console and run the command: 

```bash
npm install
# or
yarn install
```
Wait for all dependencies to load. Then you can run the project locally.

If you are going to modify this project, then first start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Make the necessary edits and run the project build command in production:

```bash
npm run build
# or
yarn build
```

The production version is now in the .next directory. You can run the production version locally using the command:

```bash
npm run start
# or
yarn start
```

Thereafter open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

By running this command, you will receive a message in the console with information about the local address and other informations.

## Deploy

If you need to deploy a project on the Versel server, check out [this page](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy) from the official NextJS documentation. To deploy to another hosting, use the instructions on the hosting site. This project supports all hostings that support nodeJS.

# How it works? And other nuances of the project

## Business data

The business data is located in the root directory - data. There you can edit or change the data, but keep in mind that you may need to go deeper and also change data types. 

The project works with Redux and uses the server side rendering approach. It means that on the first render, an asynchronous request for data is made using the GetServerSideProps function and an SEO-optimized page is sent to the client. But later, the data is written to the state and then the data is taken from the state for rendering, when data is changed.

The breakdown of business data into chunks is implemented as a helper function - mergeDataForPagination. You can find it in the helpers folder. If you need to change the number of displayed items, change the default value of the second parameter of the function (limit).

When ordering a product, some of the entered data about the buyer can be found in the state. If you need to add new fields, then create the appropriate handlersn the custom reducer as well as actions and types in the appropriate directories.

## File structure

Routes are organized in the pages folder. Pages from this folder use components from the folder of the same name. And also the common components are in a separate common folder. 

Style files are organized according to the same logic - general in the general folder, and the rest in the pages folder and further in folders with page names. In addition, there are global and auxiliary styles in the root styles folder. We used modular SCSS. 

All pages using one of two layouts, where some components are already sewn in. Also, some pages use page templates, which you can find in the corresponding directory in the component folder. This is done to combine logic so as not to duplicate.

The work uses simple animation, in the form of a higher-order component withTransition. This component is used to wrap lists with pagination for smoother switching. You can change the animation by changing the styles in the file animations.scss. 

## SEO 

To use the potential of this project, you must go through all the pages and either in the layout or in the corresponding page template, add the parameters of the title, descriptions and keywords. If necessary, you can expand the list of accepted parameters. To do this, find the Head component and throw new properties into it.