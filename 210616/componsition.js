问 :是否了解componsition API  ?
在yue2中， 代码是options API 风格，也就是通过填充 （option）data methods,computed 等属性来完成一个vue组件，这种风格使得vue较为容易入手，同时也造成了问题
    1.由于options API 不够灵活，使得vue开发的组件组件公用代码不流畅。
    2.vue过于依赖上下文的this 。typescript 在vue中不好用
    
    由于vue3中 舍弃了options api 转而使用componsition api，它本质上是将options api 背后的机制暴露给用户使用，这样用户就拥有了更多的灵活性。
componstion API  React Hook的区别。

react hook是更具suestate调用的顺序来确定下一次重渲染时的state来源于哪个usestate，所以有一下限制
 1，不能在循环，条件，嵌套中使用hook
 2.必须确保总是在你的react函数的顶层调用hook
 3.useEffect useMemo 等函数必须手动确定依赖关系

 而composition API 是基于vue的响应式系统实现的。于react相比
1.componsition API申明在setup函数内，一次组件实力化只能调用一次setup，而react hook每次重新渲染都需要调用hook,使得react的GC更频繁，性能也相对于vue慢。
2Componsition API  的调用不需要顾虑调用顺序，可以在循环，条件，嵌套函数中使用
3，响应式系统自动实现依赖手机，进而组件的部分性能优化由vue内部自己完成，而ｒｅａｃｔ　ｈｏｏｏｋ需要手动传入依赖，而且必须保证依赖的顺序，让ｕｓｅｅｆｆｅｃｔ　ｕｓｅｍｅｍｏ等函数正确的捕获依赖变量，否则由于依赖不正确使得组件性能下降

总结　Ｃｏｍｐｏｎｓｉｔｏｎ　ＡＰＩ　看起来比　ｒｅａｃｔ　ｈｏｏｋ　好用　但是设计思想来自ｒｅａｃｔ　ｈｏｏｏｋ需要手动传入依赖