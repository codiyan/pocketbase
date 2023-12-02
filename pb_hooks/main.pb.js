// Custom API Endpoint
routerAdd("POST",'/process-order/:userId', (request) => {
    // Assuming the user ID is sent in the request body
    const userId = request.pathParam('userId')
    // Simulated process: Creating a new order for the user
    const orders = $app.dao().findCollectionByNameOrId("orders")

    const newOrder = new Record(orders);
    newOrder.set("userId", userId);
    newOrder.set("orderDetails", "pending"); // Set the status to 'pending' as an example
    newOrder.set("orderDate", new Date());
    $app.dao().saveRecord(newOrder);
    // Generating a notification in Notifications table
    const notifications = $app.dao().findCollectionByNameOrId("notifications")
    const newNotification = new Record(notifications);
    newNotification.set("userId", userId);
    newNotification.set("message", `New order created for user ${userId}`);
    $app.dao().saveRecord(newNotification);

    return request.json(200, { message: "Order created" });
});
