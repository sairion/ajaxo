# Ajaxo - A Simple Ajax Wrapper (WIP)

Ajaxo is a promise-based Ajax wrapper with simple configurations, built with modern JavaScript technology.
More docs and examples will come.

```javascript
// api.js
import {APIBuilder} from 'ajaxo';

var definitions = {
    report: {
        url: '/report/<%= id %>',
        type: 'POST',
    }
};
export var API = APIBuilder(definitions);

// request-actions.js
API.report()
    .resolveWith({ id: 1 })
    .post()
    .then(response => {
        doSomethingWith(response);
    })
    .catch(xhr => {
        ...
    });
```
