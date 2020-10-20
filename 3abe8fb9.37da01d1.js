(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),u=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,b=p["".concat(c,".").concat(g)]||p[g]||s[g]||o;return n?i.a.createElement(b,a(a({ref:t},m),{},{components:n})):i.a.createElement(b,a({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var m=2;m<o;m++)c[m]=n[m];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(106)),c={title:"Metrics"},a={unversionedId:"logging",id:"logging",isDocsHomePage:!1,title:"Metrics",description:"Logging metrics",source:"@site/docs/logging.md",slug:"/logging",permalink:"/azureml-examples/docs/logging",editUrl:"https://github.com/Azure/azureml-examples/tree/website/website/docs/logging.md",version:"current",sidebar:"mainSidebar",previous:{title:"Running Code in the Cloud",permalink:"/azureml-examples/docs/script-run-config"},next:{title:"Distributed GPU Training",permalink:"/azureml-examples/docs/distributed-training"}},l=[{value:"Logging metrics",id:"logging-metrics",children:[{value:"<code>log</code>",id:"log",children:[]},{value:"<code>log_row</code>",id:"log_row",children:[]},{value:"With MLFlow",id:"with-mlflow",children:[]}]},{value:"Viewing metrics",id:"viewing-metrics",children:[{value:"Via the SDK",id:"via-the-sdk",children:[]}]}],m={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"logging-metrics"},"Logging metrics"),Object(o.b)("p",null,"Logging a metric to a run causes that metric to be stored in the run record in the experiment.\nVisualize and keep a history of all logged metrics."),Object(o.b)("h3",{id:"log"},Object(o.b)("inlineCode",{parentName:"h3"},"log")),Object(o.b)("p",null,"Log a single metric value to a run."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Run\nrun = Run.get_context()\nrun.log('metric-name', metric_value)\n")),Object(o.b)("p",null,"You can log the same metric multiple times within a run, the result being considered a vector\nof that metric."),Object(o.b)("h3",{id:"log_row"},Object(o.b)("inlineCode",{parentName:"h3"},"log_row")),Object(o.b)("p",null,"Log a metric with multiple columns."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Run\nrun = Run.get_context()\nrun.log_row("Y over X", x=1, y=0.4)\n')),Object(o.b)("h3",{id:"with-mlflow"},"With MLFlow"),Object(o.b)("p",null,"Use MLFlowLogger to log metrics."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="script.py"',title:'"script.py"'}),"from azureml.core import Run\n\n# connect to the workspace from within your running code\nrun = Run.get_context()\nws = run.experiment.workspace\n\n# workspace has associated ml-flow-tracking-uri\nmlflow_url = ws.get_mlflow_tracking_uri()\n")),Object(o.b)("h4",{id:"example-pytorch-lightning"},"Example: PyTorch Lightning"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from pytorch_lightning.loggers import MLFlowLogger\n\nmlf_logger = MLFlowLogger(experiment_name=run.experiment.name, tracking_uri=mlflow_url)\nmlf_logger._run_id = run.id\n")),Object(o.b)("h2",{id:"viewing-metrics"},"Viewing metrics"),Object(o.b)("h3",{id:"via-the-sdk"},"Via the SDK"),Object(o.b)("p",null,"Viewing metrics in a run (for more details on runs: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"run"}),"Run"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"metrics = run.get_metrics()\n# metrics is of type Dict[str, List[float]] mapping mertic names\n# to a list of the values for that metric in the given run.\n\nmetrics.get('metric-name')\n# list of metrics in the order they were recorded\n")),Object(o.b)("p",null,"To view all recorded values for a given metric ",Object(o.b)("inlineCode",{parentName:"p"},"my-metric")," in a\ngiven experiment ",Object(o.b)("inlineCode",{parentName:"p"},"my-experiment"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"experiments = ws.experiments\n# of type Dict[str, Experiment] mapping experiment names the\n# corresponding Experiment\n\nexp = experiments['my-experiment']\nfor run in exp.get_runs():\n    metrics = run.get_metrics()\n    \n    my_metric = metrics.get('my-metric')\n    if my_metric:\n        print(my_metric)\n")))}u.isMDXComponent=!0}}]);