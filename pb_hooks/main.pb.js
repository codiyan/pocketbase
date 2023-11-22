// Custom API Endpoint
routerAdd("POST", "process-order", (request) => {
    // Assuming the user ID is sent in the request body
    const { userId } = request.body;
    console.log(`Processing order for user ${userId}`)
    // Simulated process: Creating a new order for the user
    const newOrder = new Record("orders");
    newOrder.set("userId", userId);
    newOrder.set("status", "pending"); // Set the status to 'pending' as an example
    $app.dao().saveRecord(newOrder);

    // Generating a notification in Notifications table
    const notification = new Record("notifications");
    notification.set("userId", userId);
    notification.set("message", `New order created for user ${userId}`);
    $app.dao().saveRecord(notification);

    return request.json(200, { message: "Order created and notification sent" });
});
