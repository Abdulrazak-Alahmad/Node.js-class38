import app from './app.js'
import exphbs from 'express-handlebars';

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));

app.listen(3000);