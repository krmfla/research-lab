# React介紹
>site: https://facebook.github.io/react/

學習Facebook如何處理複雜的應用互動

操作效率？ ReactJS VS Native Javascript?

若僅是第一次Render，Native Javascript最有效率

ReactJS需通過上層語法，來操作DOM物件

React更適用於當數據發生變化時，透過 virtual DOM 做 diff 演算比對，來更新 DOM 物件

<br />

### Batching 和 Diff

<br>


网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？

https://www.zhihu.com/question/31809713

<br />

### propTypes

型別檢查

```javascript
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```
