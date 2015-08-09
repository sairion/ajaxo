# Ajaxo - A Simple Ajax Wrapper (WIP)

Ajaxo is an Ajax wrapper with simple configurations, built with modern JavaScript technology.
More docs and examples are will come.

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
    .then(response => {
        doSomethingWith(response);
    })
    .catch(xhr => {
        ...
    });
```
