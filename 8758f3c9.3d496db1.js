(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(106)),i={title:"Dataset"},c={unversionedId:"dataset",id:"dataset",isDocsHomePage:!1,title:"Dataset",description:"Create Dataset",source:"@site/docs/dataset.md",slug:"/dataset",permalink:"/azureml-examples/docs/dataset",editUrl:"https://github.com/Azure/azureml-examples/tree/website/website/docs/dataset.md",version:"current"},l=[{value:"Create Dataset",id:"create-dataset",children:[{value:"From local data",id:"from-local-data",children:[]}]},{value:"Use Dataset",id:"use-dataset",children:[{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-dataset"},"Create Dataset"),Object(o.b)("h3",{id:"from-local-data"},"From local data"),Object(o.b)("h4",{id:"upload-to-datastore"},"Upload to datastore"),Object(o.b)("p",null,"To upload a local directory ",Object(o.b)("inlineCode",{parentName:"p"},"./data/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndatastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)\n")),Object(o.b)("p",null,"This will upload the entire directory ",Object(o.b)("inlineCode",{parentName:"p"},"./data")," from local to the default datastore associated\nto your workspace ",Object(o.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(o.b)("h4",{id:"create-dataset-from-files-in-datastore"},"Create dataset from files in datastore"),Object(o.b)("p",null,"To create a dataset from a directory on a datastore at ",Object(o.b)("inlineCode",{parentName:"p"},"<path/on/datastore>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n")),Object(o.b)("h2",{id:"use-dataset"},"Use Dataset"),Object(o.b)("h3",{id:"scriptrunconfig"},"ScriptRunConfig"),Object(o.b)("p",null,"To reference data from a dataset in a ScriptRunConfig you can either mount or download the\ndataset using:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataset.as_mount(path_on_compute)")," : mount dataset to a remote run"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataset.as_download(path_on_compute)")," : download the dataset to a remote run")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Path on compute")," Both ",Object(o.b)("inlineCode",{parentName:"p"},"as_mount")," and ",Object(o.b)("inlineCode",{parentName:"p"},"as_download")," accept an (optional) parameter ",Object(o.b)("inlineCode",{parentName:"p"},"path_on_compute"),".\nThis defines the path on the compute target where the data is made available."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"None"),", the data will be downloaded into a temporary directory."),Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"path_on_compute")," starts with a ",Object(o.b)("inlineCode",{parentName:"li"},"/")," it will be treated as an ",Object(o.b)("strong",{parentName:"li"},"absolute path"),". (If you have\nspecified an absolute path, please make sure that the job has permission to write to that directory.)"),Object(o.b)("li",{parentName:"ul"},"Otherwise it will be treated as relative to the working directory")),Object(o.b)("p",null,"Reference this data in a remote run, for example in mount-mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),"arguments=[dataset.as_mount()]\nconfig = ScriptRunConfig(source_directory='.', script='train.py', arguments=arguments)\nexperiment.submit(config)\n")),Object(o.b)("p",null,"and consumed in ",Object(o.b)("inlineCode",{parentName:"p"},"train.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:'title="train.py"',title:'"train.py"'}),'import sys\ndata_dir = sys.argv[1]\n\nprint("===== DATA =====")\nprint("DATA PATH: " + data_dir)\nprint("LIST FILES IN DATA DIR...")\nprint(os.listdir(data_dir))\nprint("================")\n')),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"script-run-config"}),"ScriptRunConfig")))}s.isMDXComponent=!0}}]);