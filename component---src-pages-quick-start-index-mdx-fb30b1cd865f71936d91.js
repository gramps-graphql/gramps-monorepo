(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));a(11),a(5),a(6),a(2),a(10),a(1),a(0);var n=a(103),r=a(393);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p,l={},o=(p="PageDescription",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),i={_frontmatter:l},c=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,s({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"PageDescription"},Object(n.b)("p",null,"GrAMPS is an easy way to set up a GraphQL gateway (server) using community-provided data sources. In the next 5 minutes, let’s set up a working GraphQL gateway, then pull in live data using a GrAMPS data source.")),Object(n.b)("h2",{id:"step-1-create-a-new-project"},"Step 1. Create a new project"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NOTE:")," This example uses ",Object(n.b)("a",s({parentName:"p"},{href:"https://yarnpkg.com/"}),Object(n.b)("inlineCode",{parentName:"a"},"yarn")),". ",Object(n.b)("inlineCode",{parentName:"p"},"npm")," alternatives are shown in comments."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"# Make a directory and move into it.\nmkdir my-gateway && cd $_\n\n# Initialize a package.json\nyarn init -y\n# npm init -y\n")),Object(n.b)("h2",{id:"step-2-set-up-the-build-process"},"Step 2. Set up the build process"),Object(n.b)("p",null,"Because we want to use the modern features of Node, let’s create a minimal Babel configuration and add a build script."),Object(n.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add --dev babel-cli babel-preset-env\n# npm install --save-dev babel-cli babel-preset-env\n")),Object(n.b)("h3",{id:"create-a-babelrc"},"Create a ",Object(n.b)("inlineCode",{parentName:"h3"},".babelrc")),Object(n.b)("p",null,"In the project root, add a new file called ",Object(n.b)("inlineCode",{parentName:"p"},".babelrc")," with the following configuration:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "presets": [["env", { "targets": { "node": "current" } }]],\n  "ignore": ["node_modules/**"]\n}\n')),Object(n.b)("p",null,"Thanks to the smarts under the hood of ",Object(n.b)("inlineCode",{parentName:"p"},"babel-preset-env"),", we don’t have to do much."),Object(n.b)("h3",{id:"add-build-and-dev-scripts"},"Add build and dev scripts"),Object(n.b)("p",null,"Once we have a server, we’ll need to run our code through Babel to avoid any compatibility issues. To do that, let’s add a build script to our ",Object(n.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-diff"}),'  {\n    "name": "my-gateway",\n    "version": "1.0.0",\n-   "main": "index.js",\n+   "main": "dist/index.js",\n    "license": "MIT",\n+   "scripts": {\n+     "build": "babel index.js -d dist"\n+   },\n    "devDependencies": {\n      "babel-cli": "^6.26.0",\n      "babel-preset-env": "^1.6.1"\n    }\n  }\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE:")," We also changed the ",Object(n.b)("inlineCode",{parentName:"p"},"main")," entry so that the default start functionality from Node will point to the built server.")),Object(n.b)("h2",{id:"step-3-set-up-a-server"},"Step 3. Set up a server"),Object(n.b)("p",null,"Now that we’ve got a project to work in, let’s set up a simple Express server."),Object(n.b)("h3",{id:"add-dependencies"},"Add dependencies"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"# Install server dependencies.\nyarn add express get-port\n# npm install --save express get-port\n")),Object(n.b)("h3",{id:"create-the-server"},"Create the server"),Object(n.b)("p",null,"Create a new file called ",Object(n.b)("inlineCode",{parentName:"p"},"index.js")," in the project root, then add the following:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),"import Express from 'express';\nimport getPort from 'get-port';\n\nasync function startServer(app) {\n  const PORT = await getPort(8080);\n  app.listen(PORT, () => {\n    console.log(`=> server running at http://localhost:${PORT}/`);\n  });\n}\n\nconst app = Express();\n\napp.get('/', (_, res) => res.send('Hello world!'));\n\nstartServer(app);\n")),Object(n.b)("p",null,"This file creates an Express app, sets up a “Hello world!” endpoint, and starts the app listening on port 8080 (or a random port if 8080 is already in use)."),Object(n.b)("h3",{id:"verify-that-the-server-works"},"Verify that the server works"),Object(n.b)("p",null,"To verify that the server works, build and then start it:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn build\n# npm run build\n\n# Start the built server\nnode dist\n")),Object(n.b)("p",null,"Assuming port 8080 isn’t in use on your machine, opening ",Object(n.b)("a",s({parentName:"p"},{href:"http://localhost:8080/"}),"http://localhost:8080/")," should result in a “Hello world!” message."),Object(n.b)("h2",{id:"step-4-create-a-gramps-powered-graphql-gateway"},"Step 4. Create a GrAMPS-powered GraphQL gateway"),Object(n.b)("p",null,"Now that we have a working server, we can set up GrAMPS to get our gateway running."),Object(n.b)("h3",{id:"add-dependencies-1"},"Add dependencies"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add @gramps/gramps apollo-server-express body-parser graphql\n# npm install --save @gramps/gramps apollo-server-express body-parser graphql\n")),Object(n.b)("h3",{id:"set-up-the-graphql-endpoints"},"Set up the GraphQL endpoints"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-diff"}),"  import Express from 'express';\n  import getPort from 'get-port';\n+ import bodyParser from 'body-parser';\n+ import gramps from '@gramps/gramps';\n+ import { GraphQLSchema } from 'graphql';\n+ import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';\n\n  async function startServer(app) {\n    const PORT = await getPort(8080);\n    app.listen(PORT, () => {\n      console.log(`=> server running at http://localhost:${PORT}/`);\n    });\n  }\n\n  const app = Express();\n+ const GraphQLOptions = gramps();\n\n- app.get('/', (_, res) => res.send('Hello world!'));\n+ app.use(bodyParser.json());\n+ app.use('/graphql', graphqlExpress(GraphQLOptions));\n+ app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));\n\n  startServer(app);\n")),Object(n.b)("h3",{id:"test-the-gateway"},"Test the gateway"),Object(n.b)("p",null,"Let’s make sure everything is working by starting the server and running a test query."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn build\n# npm run build\n\nnode dist\n")),Object(n.b)("p",null,"Open ",Object(n.b)("a",s({parentName:"p"},{href:"http://localhost:8080/graphiql"}),"http://localhost:8080/graphiql")," and run the following query:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-graphql"}),"{\n  grampsVersion\n}\n")),Object(n.b)("p",null,"The result should look something like this:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "grampsVersion": "1.0.0"\n  }\n}\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE:")," By default, GrAMPS exposes a single query — ",Object(n.b)("inlineCode",{parentName:"p"},"grampsVersion")," — which returns the current package version of ",Object(n.b)("inlineCode",{parentName:"p"},"@gramps/gramps"),".")),Object(n.b)("h2",{id:"step-5-add-a-gramps-data-source"},"Step 5. Add a GrAMPS data source"),Object(n.b)("p",null,"Now that the gateway is running, let’s hook it up to some data by installing the ",Object(n.b)("a",s({parentName:"p"},{href:"https://github.com/gramps-graphql/data-source-xkcd"}),"xkcd GrAMPS data source"),"."),Object(n.b)("h3",{id:"add-dependencies-2"},"Add dependencies"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add @gramps/data-source-xkcd graphql-tools\n# npm install --save @gramps/data-source-xkcd graphql-tools\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE:")," GrAMPS data sources have a ",Object(n.b)("inlineCode",{parentName:"p"},"peerDependency")," of ",Object(n.b)("inlineCode",{parentName:"p"},"graphql-tools"),". This avoids a conflict where multiple data sources could introduce multiple versions of ",Object(n.b)("inlineCode",{parentName:"p"},"graphql-tools")," as subdependencies.")),Object(n.b)("h3",{id:"add-the-data-source-to-the-gateway"},"Add the data source to the gateway"),Object(n.b)("p",null,"Adding data sources to a GrAMPS gateway requires just two lines of code:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-diff"}),"  import Express from 'express';\n  import getPort from 'get-port';\n  import bodyParser from 'body-parser';\n  import gramps from '@gramps/gramps';\n  import { GraphQLSchema } from 'graphql';\n  import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';\n+ import XKCD from '@gramps/data-source-xkcd';\n\n  async function startServer(app) {\n    const PORT = await getPort(8080);\n    app.listen(PORT, () => {\n      console.log(`=> server running at http://localhost:${PORT}/`);\n    });\n  }\n\n  const app = Express();\n- const GraphQLOptions = gramps();\n+ const GraphQLOptions = gramps({\n+   dataSources: [XKCD],\n+ });\n\n  app.use(bodyParser.json());\n  app.use('/graphql', graphqlExpress(GraphQLOptions));\n  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));\n\n  startServer(app);\n")),Object(n.b)("h3",{id:"test-the-data-source"},"Test the data source"),Object(n.b)("p",null,"To verify that everything is working, run the following:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn build\n# npm run build\n\nnode dist\n")),Object(n.b)("p",null,"Open ",Object(n.b)("a",s({parentName:"p"},{href:"http://localhost:8080/graphiql"}),"http://localhost:8080/graphiql")," and run the following query:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-graphql"}),"{\n  getComicById(id: 123) {\n    title\n    link\n  }\n}\n")),Object(n.b)("p",null,"You should see the following output:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "getComicById": {\n      "title": "Centrifugal Force",\n      "link": "https://xkcd.com/123/"\n    }\n  }\n}\n')),Object(n.b)("p",null,"Bam! We just added live data from a third party in two lines of code!"),Object(n.b)("h2",{id:"step-6-add-the-gramps-cli-for-development"},"Step 6. Add the GrAMPS CLI for development"),Object(n.b)("p",null,"In order to give ourselves the ability to develop more easily — for example, using mock data, or running our gateway with a local data source we’re building — we’ll need to add the GrAMPS CLI."),Object(n.b)("h3",{id:"add-dependencies-3"},"Add dependencies"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @gramps/cli\n# npm install --save-dev @gramps/cli\n")),Object(n.b)("h3",{id:"create-package-scripts"},"Create package scripts"),Object(n.b)("p",null,"Let’s add a ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," script that will run the GrAMPS CLI’s ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," command and tell it to use our gateway."),Object(n.b)("p",null,"For convenience, let’s also add a ",Object(n.b)("inlineCode",{parentName:"p"},"predev")," script to rebuild the gateway every time we run the ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," script."),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-diff"}),'  {\n    "name": "my-gateway",\n    "version": "1.0.0",\n    "main": "index.js",\n    "license": "MIT",\n    "scripts": {\n+     "predev": "yarn build",\n+     "dev": "gramps dev --gateway dist",\n      "build": "babel index.js -d dist"\n    },\n    "devDependencies": {\n      "@gramps/cli": "^1.0.0-beta.4",\n      "babel-cli": "^6.26.0",\n      "babel-preset-env": "^1.6.1"\n    },\n    "dependencies": {\n      "@gramps/gramps": "^1.0.0-beta-7",\n      "apollo-server-express": "^1.3.1",\n      "body-parser": "^1.18.2",\n      "express": "^4.16.2",\n      "get-port": "^3.2.0",\n      "graphql": "^0.12.3",\n      "graphql-tools": "^2.13.0"\n    }\n  }\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE:")," If you’re using ",Object(n.b)("inlineCode",{parentName:"p"},"npm"),", make sure to update the ",Object(n.b)("inlineCode",{parentName:"p"},"predev")," command to use ",Object(n.b)("inlineCode",{parentName:"p"},"npm run build")," instead.")),Object(n.b)("h3",{id:"test-the-dev-script"},"Test the dev script"),Object(n.b)("p",null,"Test that the script worked by running the following:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn dev\n# npm run dev\n")),Object(n.b)("p",null,"Open ",Object(n.b)("a",s({parentName:"p"},{href:"http://localhost:8080/graphiql"}),"http://localhost:8080/graphiql")," and run a test query. This should be exactly the same as our previous test of the gateway."),Object(n.b)("p",null,"Next, let’s use the CLI to run our gateway with mock data:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn dev --mock\n# npm run dev -- --mock\n")),Object(n.b)("p",null,"Open ",Object(n.b)("a",s({parentName:"p"},{href:"http://localhost:8080/graphiql"}),"http://localhost:8080/graphiql")," and run the test query again:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-graphql"}),"{\n  getComicById(id: 123) {\n    title\n    link\n  }\n}\n")),Object(n.b)("p",null,"This time, the response should be placeholder text that looks something like this:"),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "getComicById": {\n      "title": "Quidem illo",\n      "link": "http://Sylvester.biz/"\n    }\n  }\n}\n')))}b.isMDXComponent=!0},391:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},392:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},393:function(e,t,a){"use strict";a(35),a(27);var n=a(1),r=a(391),s=a(0),p=a.n(s),l=a(102),o=a.n(l),i=a(187),c=a(121),b=a(3),d=a.n(b),u=a(372),m=function(e){var t,a=e.title,r=e.tabs,s=void 0===r?[]:r;return Object(n.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=s.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},a)))))},h=a(392),g=a(373),O=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,s=a||r,p=s.baseUrl,l=p+"/tree/master"+s.subDirectory+"/src/pages"+t;return p?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a(186),v=a(28),y=a(374);var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=o()(e,{lower:!0}),p=s===r,l=a.replace(r,s);return Object(n.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=p,t),y.listItem)},Object(n.b)(v.Link,{className:y.link,to:""+l},e))}));return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},s))))))},r}(p.a.Component),f=a(188);t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,p=t.frontmatter,l=void 0===p?{}:p,b=t.relativePagePath,d=t.titleType,u=l.tabs,h=l.title,g=l.theme,v=l.description,y=l.keywords,w=r.data.site.pathPrefix,x=w?s.pathname.replace(w,""):s.pathname,k=u?x.split("/").slice(-1)[0]||o()(u[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:g,pageTitle:h,pageDescription:v,pageKeywords:y,titleType:d},Object(n.b)(m,{title:h,label:"label",tabs:u}),u&&Object(n.b)(N,{slug:x,tabs:u,currentTab:k}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:b})),Object(n.b)(j.a,{pageContext:t,location:s,slug:x,tabs:u,currentTab:k}),Object(n.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-quick-start-index-mdx-fb30b1cd865f71936d91.js.map