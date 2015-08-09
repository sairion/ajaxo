# Ajaxo - A Simple ajax wrapper (WIP)

Simple ajax wrapper with simple configurations built with modern JavaScript technology.
More docs and examples are to be come.

```javascript
// api.js
import {APIBuilder} from 'ajaxo';

var definitions = {
    report: {
        url: '/store/customers/<%= id %>/claims',
        type: 'POST',
    }
};
export var API = APIBuilder(definitions);

// request-actions.js
API.report()
    .then(response => {
        doSomething(response);
    })
    .catch(xhr => {
        ...
    });
```
