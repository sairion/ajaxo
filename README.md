# Ajaxo - A Simple Ajax Wrapper (WIP)

Ajaxo is a promise-based Ajax wrapper with simple configurations, built with modern JavaScript technology. More docs and examples is coming.

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

## Import dist lib or ES2015 version
If you are willing to use pre-compiled ES2015 src directly, import from `ajaxo/lib` instead like:
```javascript
import {APIBuilder} from 'ajaxo/lib/api';
```
