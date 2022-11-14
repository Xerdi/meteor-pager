import {Template} from "meteor/templating";
import {ReactiveVar} from "meteor/reactive-var";
import {check} from "meteor/check";

import './index.css';
import './index.html';

Template.pager.onCreated(function () {
    check(this.data.page, ReactiveVar);
    check(this.data.limit, ReactiveVar);
    check(this.data.recordCount, Number);
});

Template.pager.helpers({
    limits() {
        return [15, 30, 50, 100];
    },
    pageCount() {
        const {limit, recordCount} = Template.instance().data;
        return Math.ceil(recordCount / limit.get());
    },
    plusOne(num) {
        return num + 1;
    },
    selectedLimitClass(currentLimit) {
        const {limit} = Template.instance().data;
        if (limit.get() === currentLimit) {
            return 'active';
        }
    }
});

Template.pager.events({
    'click .limit-dropdown[data-target]'(event, template) {
        const {limit, page} = template.data;
        limit.set(parseInt(event.currentTarget.dataset.target || '0'));
        page.set(0);
    },
    'click a.to-begin'(event, template) {
        event.preventDefault();
        const {page} = Template.instance().data;
        page.set(0);
    },
    'click a.back'(event, template) {
        event.preventDefault();
        const {page} = template.data;
        page.set(Math.max(page.get() - 1, 0));
    },
    'click a.forward'(event, template) {
        event.preventDefault();
        const {records} = template.find('[data-records]').dataset;
        const {page, limit} = Template.instance().data;
        const lastPage = Math.ceil(parseInt(records) / limit.get()) - 1;
        page.set(Math.min(page.get() + 1, lastPage));
    },
    'click a.to-end'(event, template) {
        event.preventDefault();
        const {records} = template.find('[data-records]').dataset;
        const {page, limit} = template.data;
        const lastPage = Math.ceil(parseInt(records) / limit.get()) - 1;
        page.set(lastPage);
    },
});
