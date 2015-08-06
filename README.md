# ng-scroll-pager

dead simple infinite scrolling

## Usage

```html
<ul ng-repeat="item in items" ng-scroll-pager page="nextPage()">
  <li ng-bind="item.text"></li>
</ul>
```
