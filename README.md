# Possible FlatList Bug?

Run the project (`npx react-native run-ios`) and see in the console how `renderItem` is called twice for each list item.
If you uncomment line 28 on [App.js](https://github.com/bartzy/flatlist-bug/blob/master/App.js#L28), you can see in the logs that `renderItem` is only called once per item, as it should be.
