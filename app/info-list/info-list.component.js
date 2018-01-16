angular.
  module('infoList').
  component('infoList', {
    templateUrl: 'app/info-list/info-list.template.html',
    controller: function InfoListController($window) {

      this.ls = $window.localStorage;
      this.infos = [];
      this.confirmate = false;

      if (this.ls.getItem('orderProp') == null) {
        this.orderProp = 'name';
        this.ls.setItem('orderProp', 'name')
      }
      else {
        this.orderProp = this.ls.getItem('orderProp')
      }

      if (this.ls.getItem('infosList') == null) {

        this.ls.setItem('infosList', '[]')
      }
      else {

        this.infos = JSON.parse(this.ls.getItem('infosList'))
      }


      this.mantain = function() {

        if (this.newItem.new == null) {

          this.infos.push(this.newItem);
        } else {

          item = this.infos.indexOf(this.newItem);
          this.newItem.new = null;
          this.infos[item] = this.newItem;
        }

        this.ls.setItem('infosList', JSON.stringify(this.infos))
        this.newItem = {};

      }

      this.fill = function(item) {

        this.newItem = item;
        this.newItem.new = 1;
      }

      this.confirmRemove = function(toRemove) {

        this.confirmate = true;
        this.toRemove = toRemove;
      }

      this.remove = function(toRemove) {

        this.confirmate = false;
        item = this.infos.indexOf(toRemove);
        this.infos.splice(item, 1);
        this.ls.setItem('infosList', JSON.stringify(this.infos))

      }

      this.changeOrder = function(order) {

        this.ls.setItem('orderProp', this.orderProp)
      }

    }
  });
