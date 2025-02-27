/*
* Collects and exports all schemas used in your Sanity CMS.
Right now, it only includes project-schema.ts, but more schemas (like blogs, products, etc.) will be added later.
* */


import project from './project-schema';

import page from './page-schema';

const schemas = [project, page];

export default schemas;