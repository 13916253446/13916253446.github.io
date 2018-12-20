## test

```javascript
//! 推荐使用ES规范
import { _isHasBridge } from '@qtt/qbridge'

//! 不支持ES规范，可使用CommonJS规范
const _isHasBridge = require('@qtt/qbridge')._isHasBridge

_isHasBridge(bridgeName)
```