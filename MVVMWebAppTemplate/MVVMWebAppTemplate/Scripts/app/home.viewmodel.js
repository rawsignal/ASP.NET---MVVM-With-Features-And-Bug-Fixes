function HomeViewModel(app, dataModel) {
    var self = this;
    self.myHometown = ko.observable("");

    window.onLoad = function () {
    };

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
