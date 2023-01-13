TypeScript Define a Type and Same Name Utils Demo
===========================

假设我定义了一个类型为A，同时还有一些utils来操作它，怎么能让两者尽量匹配。

可以同时使用`type/interface`和`const`来定义同名的type和utils namespace

```
npm install
npm run demo
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

