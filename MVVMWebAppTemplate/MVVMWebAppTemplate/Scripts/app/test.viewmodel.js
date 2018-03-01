function TestViewModel(app, dataModel) {
    var self = this;

    self.setLoadingOn = function () {
        isLoading(true);
    };

    self.setLoadingOff = function () {
        isLoading(false);
    };


    return self;
}

app.addViewModel({
    name: "Test",
    bindingMemberName: "test",
    factory: TestViewModel
});