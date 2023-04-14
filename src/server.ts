import { App } from '@/app';

import { ProductRoute } from '@routes/products.route';

import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new ProductRoute()]);

app.listen();