# Meteor Pager

A Bootstrap pager in a Meteor Template.

## Installation

Add the package to your project:

```shell
meteor add xerdi:pager
```

## Usage

Here's a minimal example for the `pager` template.
```handlebars
<!-- Template myPage -->
<div class="card">
    ...
    <div class="card-footer">
        {{> pager page=page recordCount=recordCount limit=limit}}
    </div>
</div>
```
The pager takes the page and limit as `ReactiveVar`'s and takes the record count as `Number` via a template helper function.

```javascript
Template.myPage.onCreated(function () {
    this.data.page = new ReactiveVar(0);
    this.data.limit = new ReactiveVar(15);
});

Template.myPage.helpers({
    records() {
        const {page, limit} = Template.instance().data;
        return MyCollection.find({}, {skip: limit.get() * page.get(), limit: limit.get()});
    },
    recordCount() {
        return MyCollection.find({}).count();
    }
});
```
The `records` helper reuses the `page` and `limit` to get the actual paged results.

