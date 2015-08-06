# ng-scroll-pager

dead simple infinite scrolling

## Install

`bower install --save ng-scroll-pager`

## Usage

```html
<ul ng-repeat="item in items" ng-scroll-pager page="nextPage()">
  <li ng-bind="item.text"></li>
</ul>
```
